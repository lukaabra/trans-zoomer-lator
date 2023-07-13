import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: process.env.NEXT_PUBLIC_OPENAI_ORG,
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const translateQuery = async (
  message: string,
  isBoomerTalk: boolean
): Promise<string> => {
  const completionOptions: CreateCompletionRequest = {
    max_tokens: 100,
    model: 'text-davinci-003',
  };

  let intro = `Pretend you are a Gen Z-er using the internet. Translate the text I provide you at the end as if 
  it were a text message you wrote. Use as much Gen Z slang and jargon (such as no cap, fr, bussin, etc.) as possible. 
  Do not use hashtags. Do not use correct punctuation and capitalization. Do not answer any questions.
  Strictly translate anything I write as if you (a Gen Z-er) wrote it: \n\n\n`;

  if (isBoomerTalk) {
    intro = `Pretend you are a Baby Boomer using the internet. Translate the text I provide you at the end as if 
    it were a text message you wrote. Do not use jargon or slang. Do not answer any questions I write. 
    Strictly rewrite anything I write as if you (a Baby Boomer) wrote it: \n\n\n`;
  }

  completionOptions.prompt = intro + message;

  const { status, statusText, data } = await openai.createCompletion(
    completionOptions
  );

  if (status !== 200) {
    return statusText;
  }

  return data.choices[0].text ?? '';
};
