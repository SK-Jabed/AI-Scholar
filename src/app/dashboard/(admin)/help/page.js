"use client";
import { useState } from "react";

const Help = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleAskAI = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      const aiResponse = data.response.candidates[0].content.parts[0].text;

      const aiMessage = { role: "ai", content: aiResponse };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto rounded-xl shadow-lg bg-white h-[90vh] max-h-screen flex flex-col">
  {/* Scrollable Messages Area */}
  <div className="p-6 overflow-y-auto flex-1 space-y-4">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`w-fit max-w-[70%] px-4 py-3 text-base rounded-lg ${
          msg.role === "user"
            ? "bg-amber-800 text-white self-end ml-auto text-right"
            : "bg-gray-100 text-gray-800 self-start mr-auto text-left"
        }`}
      >
        {msg.content}
      </div>
    ))}
    {isLoading && (
      <div className="bg-gray-100 px-4 py-3 rounded-lg text-gray-800 self-start animate-pulse max-w-[75%]">
        Thinking...
      </div>
    )}
  </div>

  {/* Fixed Footer Input Area */}
  <div className="p-4 border-t flex items-center gap-2">
    <textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none resize-none"
      rows={2}
      placeholder="Ask something..."
    />
    <button
      onClick={handleAskAI}
      disabled={isLoading || !prompt.trim()}
      className={`btn btn-lg font-medium ${
        isLoading || !prompt.trim()
          ? "bg-gray-300 text-gray-500"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      Send
    </button>
  </div>
</div>

  );
};

export default Help;
