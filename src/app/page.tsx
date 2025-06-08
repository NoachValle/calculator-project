"use client"

import { use, useState } from "react";
import { useEffect } from 'react';
import { evaluate } from "mathjs";
import { Rethink_Sans } from "next/font/google";

export default function Home() {
  const [input, Setinput] = useState("");
  const handleButtonPress = (value : any)=>{
    if(value === "="){
      Setinput(evaluate(input));
      return;
    }
    Setinput((prev)=>prev+value);
  }
  const handleClear = () => {
    Setinput("");
  }
  const buttons = [
    "1", "2", "3", "/",
    "4", "5", "6", "*",
    "7", "8", "9", "-",
    ".", "0", "=", "+",

  ];

  return (
    <div className="w-lvh h-lvh text-white bg-slate-400 flex items-center justify-center flex-col ">
      <h1 className="text-4xl p-5">Welcome to a Calculator-Project</h1>
      <div className="bg-slate-800 p-5 shadow-lg shadow-slate-900/50 ring-3 rounded-xl h-[30rem] w-[25rem] place-content-center">
        <input readOnly className="w-full h-[4rem] text-2xl bg-slate-600 rounded-md mb-10" type="text" placeholder="0" value={input}/>
        <ul className="grid grid-cols-4 gap-10">
          <button className="text-black bg-violet-400 rounded-xl h-[2rem]" onClick={handleClear}>C</button>
            {buttons.map((btnChart) => (
          <button
            key={btnChart}
            onClick={() => handleButtonPress(btnChart)}
            className = "text-black bg-violet-400 rounded-xl h-[2rem]"
          >
            {btnChart}
          </button>
        ))}
        </ul>
      </div>
    </div>
  );
}
