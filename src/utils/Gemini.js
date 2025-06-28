import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI with your API key
const ai = new GoogleGenAI({
  apiKey: "AIzaSyC7XkmFnv4qDzTDJINGRYZqgVd2-ZA-QIU",
  dangerouslyAllowBrowserOnly: true,
});

export default ai;