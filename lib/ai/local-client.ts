import OpenAI from 'openai'

const defaultBaseUrl = process.env.LOCAL_AI_BASE_URL ?? 'http://localhost:1234/v1'
const defaultModel = process.env.LOCAL_AI_MODEL ?? 'meta-llama-3-8b-instruct'

export const localAI = new OpenAI({
  apiKey: process.env.LOCAL_AI_API_KEY ?? 'local-no-key-needed',
  baseURL: defaultBaseUrl,
})

export async function askLocalAI(
  prompt: string,
  options?: {
    systemPrompt?: string
    temperature?: number
    model?: string
  }
) {
  const response = await localAI.chat.completions.create({
    model: options?.model ?? defaultModel,
    temperature: options?.temperature ?? 0.7,
    messages: [
      {
        role: 'system',
        content:
          options?.systemPrompt ??
          'You are a helpful offline-ready career assistant for CareerOS Ultimate.',
      },
      { role: 'user', content: prompt },
    ],
  })

  return response.choices[0]?.message?.content ?? ''
}
