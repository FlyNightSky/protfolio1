"use client"
import { useState, useEffect } from 'react';

const Script = () => {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        // Code to execute when Enter key is pressed
        console.log('webGPT3.5');
        let inputVal = document.getElementById('input').value;
        alert("DetoxGPT is typing...");
        const apiKey = "YOUR_GPT_KEY";
        const apiUrl = "https://detoxgpt.glitch.me/web/_aHR0cHM6Ly9hcGkub3BlbmFpLmNvbQ==_/v1/chat/completions";
        (async function() {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: `${inputVal}` }]
            }),
          });
          const data = await response.json();
          alert(data.choices[0].message.content);
        })();
      }
    }

    const object = document.getElementById('input');
    object.addEventListener('keydown', handleKeyPress);

    return () => {
      // Clean up the event listener when the component unmounts
      object.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen text-white">
        <h1 className="absolute pb-36 font-bold text-5xl">DetoxGPT</h1>
        <input
          id="input"
          className="outline outline-1 outline-teal-200 rounded bg-transparent px-2 hover:px-5"
          placeholder="Ask DetoxGPT"
        />
      </div>
    </div>
  );
};

export default Script;
