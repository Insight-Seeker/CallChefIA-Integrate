import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const xi = process.env.XI_API_KEY;
    if (!xi) return NextResponse.json({ error: 'XI_API_KEY manquant' }, { status: 500 });

    const { searchParams } = new URL(req.url);
    const agent_id = searchParams.get('agent_id') || process.env.NEXT_PUBLIC_ELEVEN_AGENT_ID;
    if (!agent_id) return NextResponse.json({ error: 'agent_id requis' }, { status: 400 });

    const r = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${agent_id}`, {
      method: 'GET',
      headers: { 'xi-api-key': xi }
    });

    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json({ error: 'ElevenLabs error', details: text }, { status: 500 });
    }

    const data = await r.json();
    return NextResponse.json({ token: data.token });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Unknown error' }, { status: 500 });
  }
}
