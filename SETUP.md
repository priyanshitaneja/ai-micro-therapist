# 🧘 Mood Tracker Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
Your dependencies are already installed! You have:
- Next.js 15.3.4
- React 19
- Tailwind CSS 4
- Framer Motion (for animations)
- OpenAI SDK

### 2. Set Up Environment Variables

Create a `.env.local` file in your project root with:

```env
# Google Gemini API Configuration (Required for AI therapist - FREE!)
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key_here

# n8n Webhook Configuration (Optional)
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/mood-tracker
NEXT_PUBLIC_N8N_SUMMARY_WEBHOOK_URL=https://your-n8n-instance.com/webhook/weekly-summary
```

### 3. Get Your Google API Key (FREE!)
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy it and replace `your_google_api_key_here` in your `.env.local`

### 4. Start the Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your mood tracker!

## ✨ Features Included

### 🎨 Beautiful Two-Step Flow
1. **Mood Type Selection**: Choose from 4 colored circles (red, yellow, blue, green)
2. **Emotion Selection**: Pick specific emotions with animated emoji buttons
3. **Notes & AI Insights**: Share thoughts and get personalized micro-therapy responses

### 🧠 AI Micro-Therapist
- Powered by GPT-4o-mini
- Provides empathetic, supportive responses
- Contextual advice based on your mood type and emotion
- Fallback responses if API is unavailable

### 💾 Persistent Storage
- All mood entries saved to localStorage
- View today's mood journey
- Track patterns over time

### 🔗 n8n Integration (Optional)
- Automatic webhook calls to n8n
- Send mood data for further automation
- Weekly summary support

## 🛠️ Tech Stack
- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **AI**: OpenAI GPT-4o-mini
- **Storage**: Browser localStorage
- **Automation**: n8n webhooks (optional)

## 🎯 What's Next?

Your mood tracker is fully functional! Here are some ideas for expansion:
- Add data visualization charts
- Implement dark mode
- Create mood pattern analysis
- Add reminder notifications
- Export data to CSV/JSON
- Add user authentication
- Create mood streaks and achievements

## 🔧 Troubleshooting

### OpenAI API Issues
- Make sure your API key is valid and has credits
- Check the `.env.local` file is in the project root
- Restart the dev server after adding environment variables

### n8n Webhooks Not Working
- This is optional - the app works without it
- Check your webhook URLs are correct
- Ensure n8n instance is accessible

Enjoy tracking your mood and getting personalized insights! 🌟 