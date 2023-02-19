import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

const OPEN_AI = new OpenAIApi(configuration)

export { OPEN_AI }
