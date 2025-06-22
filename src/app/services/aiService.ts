import { MoodEntry } from '../types';
import { getMoodTypeDescription, getFallbackResponse } from '../utils/emotions';

export const getAIResponse = async (
  moodType: string, 
  emotion: string, 
  userNotes: string,
  pastMoodEntries: MoodEntry[]
): Promise<string> => {
  try {
    // Get past mood patterns from localStorage for MCP memory
    const pastMoods = pastMoodEntries.slice(0, 5).map(entry => ({
      emotion: entry.emotion,
      moodType: entry.moodType,
      date: entry.date
    }));
    
          const systemPrompt = `You are a compassionate and professional micro-therapist. Your role is to provide brief, supportive, and helpful responses to users sharing their emotional states.

Guidelines:
- Keep responses concise (2-3 sentences max)
- ALWAYS include 1-2 specific, actionable suggestions they can do right now
- Be empathetic and validating
- Use a warm but professional tone
- Avoid giving medical advice or diagnosing
- Focus on immediate coping strategies, breathing exercises, movement, or self-care actions
- Acknowledge their feelings without dismissing them
- DO NOT ask questions or request responses - provide complete, self-contained support
- End with encouragement, not questions

Current mood data:
- Mood Type: ${getMoodTypeDescription(moodType)}
- Specific Emotion: ${emotion}
${userNotes ? `- User's message: ${userNotes}` : ''}

${pastMoods.length > 0 ? `Recent mood patterns: ${pastMoods.map(m => `${m.emotion} (${m.moodType})`).join(', ')}` : ''}

Response format: Brief validation + 1-2 specific actionable suggestions they can try right now to feel better + gentle encouragement. Examples:
- For negative emotions: "Try taking 3 deep breaths, go for a 5-minute walk, listen to calming music, call a friend, do 10 jumping jacks, write down 3 things you're grateful for, take a warm shower"
- For high energy emotions: "Channel that energy into something productive, do some stretches, dance to your favorite song, tidy up your space"
- For low energy: "Be gentle with yourself, make some tea, do some light stretching, step outside for fresh air, listen to an uplifting podcast"

IMPORTANT: End responses with supportive statements like "You've got this" or "Take it one moment at a time" rather than questions.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Mood Tracker'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3-0324:free',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: `I'm feeling ${emotion.toLowerCase()}. ${userNotes || "That's all I wanted to share right now."}`
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API failed with status ${response.status}`);
    }

    const data = await response.json();
    const aiMessage = data.choices[0]?.message?.content;
    
    if (typeof aiMessage === 'string' && aiMessage.trim()) {
      return aiMessage;
    } else {
      throw new Error('Invalid response format from OpenRouter');
    }
  } catch {
    return getFallbackResponse(moodType);
  }
}; 