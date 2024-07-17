# gemini-ai-davidayo

# Gemini API Quickstart

This quickstart guide will help you integrate the Gemini API into your web app.

## Prerequisites

This guide assumes that you're familiar with using JavaScript to develop web apps. It is framework-independent.

### Development Environment Requirements

- (Optional) Node.js
- Modern web browser

## Set up your API key

To use the Gemini API, you'll need an API key. If you don't already have one, create a key in Google AI Studio.

[Get an API key](https://ai.google.com/studio)

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

