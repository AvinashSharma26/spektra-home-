import { GoogleGenAI } from "@google/genai";

export const getCloudAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Spektra Systems AI Cloud Advisor. 
        Your goal is to help users understand Spektra Systems' services which include:
        1. CloudLabs: Hands-on labs for software companies and training providers.
        2. Managed Cloud Services: Expertise in Azure, AWS, and GCP.
        3. Cloud Modernization: Helping enterprises move to the cloud securely.
        4. SaaS Operations: Building and managing SaaS platforms.
        
        Style: Professional, concise, enterprise-focused, and helpful. 
        Promote Spektra Systems as a leader in cloud automation and digital transformation.`,
        temperature: 0.7,
      },
    });

    // .text is a property, not a method
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Spektra AI Advisor is temporarily offline. Please try again later.";
  }
};