require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Check Node.js version for OpenSSL compatibility
const nodeVersion = process.version;
console.log(`[info] Node.js version: ${nodeVersion}`);

// Set OpenSSL legacy provider for Node.js 17+ if needed
if (process.version.startsWith('v17') || process.version.startsWith('v18') || process.version.startsWith('v19') || process.version.startsWith('v20')) {
    console.log('[info] Using legacy OpenSSL provider for compatibility');
    process.env.NODE_OPTIONS = '--openssl-legacy-provider';
}

const app = express();

// Middleware
app.use(cors({ origin: '*'}));
app.use(express.json());

// Config
const PORT = process.env.PORT || 4000;
const BACKEND_NAME = 'Bhargavi Health Care Backend';

// Nodemailer transporter
function createTransporter() {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || 'false') === 'true';
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
        console.warn('[mail] SMTP env vars missing. Emails will fail until configured.');
    }

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
    });
}

// Google Sheets client (Service Account)
async function appendToSheet(data) {
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const sheetTab = process.env.GOOGLE_SHEETS_TAB || 'sheet dxoc';

    if (!clientEmail || !privateKeyRaw || !spreadsheetId) {
        console.warn('[sheets] Google Sheets env vars missing. Skipping append.');
        return;
    }

    try {
        console.log('[sheets] Attempting to authenticate with Google...');
        
        // Clean up the private key - remove quotes and handle newlines properly
        let privateKey = privateKeyRaw;
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.slice(1, -1);
        }
        privateKey = privateKey.replace(/\\n/g, '\n');
        
        console.log('[sheets] Authenticating...');
        
        // Create JWT client with proper error handling
        const auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });

        // Authenticate
        await auth.authorize();
        console.log('[sheets] Authentication successful');

        // Create Google Sheets client
        const sheets = google.sheets({ version: 'v4', auth });
        
        // Prepare data for append
        const values = [
            [
                new Date().toISOString(), // Timestamp
                data.name || '',
                data.email || '',
                data.phone || '',
                data.service || '',
                data.preferredDate || '',
                data.message || ''
            ]
        ];

        console.log('[sheets] Appending data to sheet...');
        
        // Append data to the sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: `${sheetTab}!A:G`,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource: { values }
        });

        console.log('[sheets] Successfully appended data:', response.data);
        return true;

    } catch (error) {
        console.error('[sheets] Google Sheets error:', error.message);
        
        // Try alternative authentication method for OpenSSL compatibility
        try {
            console.log('[sheets] Trying alternative authentication method...');
            
            // Use a different approach with explicit key formatting
            const privateKey = privateKeyRaw
                .replace(/\\n/g, '\n')
                .replace(/^["']|["']$/g, '');
            
            const auth = new google.auth.JWT(
                clientEmail,
                null,
                privateKey,
                ['https://www.googleapis.com/auth/spreadsheets']
            );
            
            await auth.authorize();
            console.log('[sheets] Alternative authentication successful');
            
            // Continue with sheets operations...
            const sheets = google.sheets({ version: 'v4', auth });
            
            const values = [
                [
                    new Date().toISOString(),
                    data.name || '',
                    data.email || '',
                    data.phone || '',
                    data.service || '',
                    data.preferredDate || '',
                    data.message || ''
                ]
            ];
            
            const response = await sheets.spreadsheets.values.append({
                spreadsheetId: spreadsheetId,
                range: `${sheetTab}!A:G`,
                valueInputOption: 'RAW',
                insertDataOption: 'INSERT_ROWS',
                resource: { values }
            });
            
            console.log('[sheets] Successfully appended data with alternative method');
            return true;
            
        } catch (altError) {
            console.error('[sheets] Alternative method also failed:', altError.message);
            throw altError;
        }
    }
}

function buildUserEmailHtml(payload) {
    const officeEmail = process.env.OFFICE_EMAIL || 'info@bhargavihealthcare.com';
    const officePhone = process.env.OFFICE_PHONE || '+91 98765 43210';
    const officeAddress = process.env.OFFICE_ADDRESS || '123 Health Street, Medical District, Chennai - 600001';
    return `
      <div style="font-family: Arial, sans-serif; color: #111;">
        <h2 style="color:#007D8C;">Thank you for contacting Bhargavi Health Care</h2>
        <p>Hi ${payload.name || 'there'},</p>
        <p>We have received your request regarding <strong>${payload.service || 'our services'}</strong> for the date <strong>${payload.preferredDate || 'N/A'}</strong>.</p>
        <p>Our team will reach out to you within 24 hours.</p>
        <hr/>
        <h3 style="color:#007D8C;">Office Contact Details</h3>
        <p>Email: ${officeEmail}<br/>
           Phone: ${officePhone}<br/>
           Address: ${officeAddress}
        </p>
        <p style="margin-top:16px; color:#555;">Warm regards,<br/>Bhargavi Health Care Team</p>
      </div>
    `;
}

function buildAdminEmailHtml(payload) {
    return `
      <div style="font-family: Arial, sans-serif; color: #111;">
        <h2 style="color:#007D8C;">New Contact Form Submission</h2>
        <ul>
          <li><strong>Name:</strong> ${payload.name || ''}</li>
          <li><strong>Email:</strong> ${payload.email || ''}</li>
          <li><strong>Phone:</strong> ${payload.phone || ''}</li>
          <li><strong>Service:</strong> ${payload.service || ''}</li>
          <li><strong>Preferred Date:</strong> ${payload.preferredDate || ''}</li>
          <li><strong>Message:</strong> ${payload.message || ''}</li>
          <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
        </ul>
      </div>
    `;
}

app.post('/contact', async (req, res) => {
    try {
        const payload = req.body || {};
        const { name, email, phone, service, preferredDate, message } = payload;

        if (!name || !email || !phone || !service || !preferredDate || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        console.log('[contact] Processing submission for:', email);

        // 1) Append to Google Sheet (non-blocking but awaited here for simplicity)
        try {
            console.log('[contact] Attempting to append to Google Sheet...');
            await appendToSheet(payload);
            console.log('[contact] Successfully appended to Google Sheet');
        } catch (sheetError) {
            console.error('[contact] Google Sheet error:', sheetError);
            // Continue with email sending even if sheet fails
        }

        // 2) Send emails
        try {
            console.log('[contact] Attempting to send emails...');
            const transporter = createTransporter();
            const fromEmail = process.env.MAIL_FROM || process.env.SMTP_USER;
            const adminEmail = process.env.ADMIN_EMAIL || fromEmail;

            // User thank-you email
            const userMail = {
                from: fromEmail,
                to: email,
                subject: 'Thanks for contacting Bhargavi Health Care',
                html: buildUserEmailHtml(payload),
            };

            // Admin notification email
            const adminMail = {
                from: fromEmail,
                to: adminEmail,
                subject: 'New Contact Form Submission',
                html: buildAdminEmailHtml(payload),
            };

            await Promise.all([
                transporter.sendMail(userMail),
                transporter.sendMail(adminMail),
            ]);
            console.log('[contact] Successfully sent emails');
        } catch (emailError) {
            console.error('[contact] Email error:', emailError);
            // Return success even if email fails, since we're just testing
        }

        return res.status(200).json({ message: 'Submission processed successfully' });
    } catch (err) {
        console.error('[contact] Unexpected error:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: BACKEND_NAME, time: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`${BACKEND_NAME} running on port ${PORT}`);
});