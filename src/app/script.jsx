"use client"
import { useState, useEffect } from 'react';

const Script = () => {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        // Code to execute when Enter key is pressed
        console.log('webGPT3.5');
        let inputVal = document.getElementById('input').value;
        let API = document.getElementById('api-key').value;
        alert("DetoxGPT is typing...");
        const apiKey = API;
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
      <div className="flex justify-center items-center w-screen h-screen text-white ">
        <h1 className="absolute pb-36 font-bold text-5xl z-0">DetoxGPT</h1>
        <input
          id="api-key"
          className="z-10 transition-all outline outline-1 outline-teal-200 rounded bg-transparent px-2 hover:px-5"
          placeholder="API KEY"
        />
        <input
          id="input"
          className=" z-10 transition-all absolute mt-20 outline outline-1 outline-teal-200 rounded bg-transparent px-2 hover:px-5"
          placeholder="Ask DetoxGPT"
        />
        <h2 className='absolute font-bold pt-40'>Can't click on the GPT box? click tab</h2>
      <footer className='absolute bottom-0 pb-2 text-blue-200 '>
       <a class="text-2xl absolute ml-20" href="https://cognet.vercel.app">
        <img src="https://cognet.vercel.app/logo.png" className='z-0 ' width="45"/> 
        </a> 
        <h1 className='bottom-0 ml-14 absolute pb-5'>+</h1> 
        <a href='https://detoxnetwork.repl.co'>
        <img src="https://new-navbar.detoxnetwork.repl.co/logo.svg" className='mr-24 z-10' width="50"/>
        </a>
      </footer>
      </div>
    </div>
  );
};

export default Script;
