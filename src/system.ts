export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 嗨，章鱼哥！你遇到什么困难了吗，为什么不问问神奇海螺呢？
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。
- 由 [@ourongxing](https://github.com/ourongxing) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，吃水不忘挖井人，感谢感谢。
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
