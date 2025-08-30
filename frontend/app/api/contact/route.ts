import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Get backend URL directly from environment variables
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 
                      process.env.BACKEND_URL || 
                      'https://healthcareproject-39oy.onrender.com';
    
    console.log(`[API] Using backend URL: ${backendUrl}`);
    
    const res = await fetch(`${backendUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    if (!res.ok) {
      const contentType = res.headers.get('content-type') || '';
      const errorPayload = contentType.includes('application/json')
        ? await res.json().catch(() => ({ message: 'Upstream error' }))
        : { message: await res.text().catch(() => 'Upstream error') };
      return NextResponse.json(errorPayload, { status: res.status });
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
    
  } catch (error) {
    console.error('Contact form proxy error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}