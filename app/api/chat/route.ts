import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant for Adnan Hassans professional portfolio website.
Your role is to help visitors learn about Hassan skills, experience, projects, and background in a friendly and professional manner`

export async function POST(request: NextRequest) {
    try {
        const {messages} = await request.json();

        if (!messages || messages.length === 0) {
            return NextResponse.json(
                { error: 'No messages provided' }, 
                { status: 400 });
        }

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages,
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 1,
        });

        const assistantMessage = chatCompletion.choices[0].message.content;

        if (!assistantMessage) {
            throw new Error('No assistant message returned');
        }

    return NextResponse.json({
        message: assistantMessage,
      });
    } catch (error: any) {
      console.error("Error in chat API:", error);
  

      if (error?.status === 401) {
        return NextResponse.json(
          { error: "Invalid API key. Please check your Groq API key." },
          { status: 401 }
        );
      }
  
      if (error?.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 }
        );
      }
       // Generic error response
    return NextResponse.json(
        { error: "An error occurred while processing your request." },
        { status: 500 }
      );
    }
}