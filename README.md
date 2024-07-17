# Gemini-AI-davidayo

/Users/Daveayo/Desktop/Screen Shot 2024-07-17 at 2.09.15 PM.png



# Gemini API Quickstart

This quickstart guide will help you integrate the Gemini API into your web app.

## Prerequisites

This guide assumes that you're familiar with using JavaScript to develop web apps. It is framework-independent.

### Development Environment Requirements

- (Optional) Node.js
- Modern web browser

## Set up your API key

To use the Gemini API, you'll need an API key. If you don't already have one, create a key in Google AI Studio.

[Get an API key](https://aistudio.google.com/app/apikey)

Then configure your key.

**Important:** It's strongly recommended that you do not check an API key into your version control system. Instead, you should pass your API key to your app right before initializing the model.

This quickstart assumes that you're accessing your API key as a global constant.

## Install the SDK

To use the Gemini API in your own web app, import `@google/generative-ai`:

```html
<script type="importmap">
  {
    "imports": {
      "@google/generative-ai": "https://esm.run/@google/generative-ai"
    }
  }
</script>

Initialize the model
Before you can make any API calls, you need to import and initialize the model. Gemini 1.5 models are versatile and work with both text-only and multimodal prompts.


<html>
<body>
  <!-- ... Your HTML and CSS -->
  <!-- Import @google/generative-ai, as shown above. -->
  <script type="module">
      import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
      const API_KEY = "...";

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY);

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  </script>
</body>
</html>

Generate text

async function run() {
  const prompt = "Write a story about a AI and magic"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();

