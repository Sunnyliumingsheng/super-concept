// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'sk-0ee1885fa8bf477d8b0979eb999b9f1c'
});

const system_prompt = `
The user will provide some exam text. Please parse the "question" and "answer" and output them in JSON format. 
you need explain this word mean in english for a chinese student, and pay attention to the usage examples's difficulty.
besides you need to judje whether the word is suitable for image description, if it is suitable, set the value of "isSuitableImageDescription" to true, otherwise set it to false.

EXAMPLE INPUT: 
explain the word "apple" for a primary school student

EXAMPLE JSON OUTPUT:
{
    "word":"apple",
    "mean":"a kind of fruit",
    "isSuitableImageDescription":true,
    "fiveUsageExamples":[
        "I like to eat an apple every day.",
        "An apple a day keeps the doctor away.",
        "She offered me a shiny red apple.",
        "The teacher asked us to draw an apple.",
        "In the story, the witch gave Snow White a poisoned apple."
    ]
}
`

const user_prompt = "explain the word \"ironic\" for a primary school student"

const messages = [{"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}]


async function main() {
  console.log("发送请求")
  const completion = await openai.chat.completions.create({
    messages:messages,
    model: "deepseek-chat",
  });
  console.log("收到回复")

  console.log(completion.choices[0].message.content);
}

main();