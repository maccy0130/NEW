import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { askLocalAI } from '../../../../lib/ai/local-client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const prompt = typeof body?.prompt === 'string' ? body.prompt : null
    const systemPrompt = typeof body?.systemPrompt === 'string' ? body.systemPrompt : undefined

    if (!prompt) {
      return NextResponse.json(
        { error: 'Missing prompt in request body.' },
        { status: 400 }
      )
    }

    const text = await askLocalAI(prompt, { systemPrompt })

    return NextResponse.json({ text })
  } catch (error) {
    console.error('Local AI route failed:', error)
    return NextResponse.json(
      {
        error:
          'Could not reach the local AI endpoint. Make sure LM Studio or Ollama is running on the configured base URL.',
      },
      { status: 500 }
    )
  }
}
