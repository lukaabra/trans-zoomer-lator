import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: process.env.NEXT_PUBLIC_OPENAI_ORG,
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const translateQuery = async (message: string): Promise<string> => {
  const completionOptions = {
    model: 'text-davinci-003',
    prompt: message,
  };

  const { status, statusText, data } = await openai.createCompletion(
    completionOptions
  );

  if (status !== 200) {
    return statusText;
  }

  return data.choices[0].text ?? '';
};
