"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const questions = [
    {
      question: "Why keeping the food covered is important to prevent cholera?",
      options: [
        "So that no cholera carrying flies can sit on the food",
        "So that no dust can get into the food",
        "So that food doesn’t get cold",
        "So that cholera bacteria cannot enter the food through the air",
      ],
      correct: 0,
    },
    {
      question: "Why is washing hands before eating important?",
      options: [
        "To remove dirt and germs from the hands",
        "To make the food taste better",
        "To keep the hands moisturized",
        "To prevent the hands from getting sticky",
      ],
      correct: 0,
    },
    {
      question: "What is the best way to purify drinking water?",
      options: [
        "Store the water in a sealed container",
        "Boil the water for at least 1 minute",
        "Leave the water in the sun for 5 minutes",
        "Add salt to the water",
      ],
      correct: 1,
    },
    {
      question: "Why should leftover food be stored in a refrigerator?",
      options: [
        "To make the food colder",
        "To prevent bacteria from growing on it",
        "So that food doesn’t get cold",
        "So that cholera bacteria cannot enter the food through the air",
      ],
      correct: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
        <div className="text-center">
          <div className="text-3xl text-white bg-blue-500 p-4 rounded-lg">
            Total Score:
          </div>
          <div className="text-5xl text-white bg-pink-500 p-4 rounded-lg mt-4">
            {score}/{questions.length}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[url('/Assets/Images/BG.png')] bg-cover bg-center ">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Link href="./qnatwo">
          <button className="p-2">
            <Image
              src="/Assets/Images/Back_button.png"
              alt="Back Button"
              width={50}
              height={50}
            />
          </button>
        </Link>
      </div>

      {/* Quiz Section */}
      <div className="flex flex-grow justify-center items-center mx-0 ">
           
     

        <div className="grid max-w-6xl w-full ">
          {/* Timer, Question, and Score */}
          <div className="flex  items-center justify-center space-y-6">
         {/* Timer */}
        <div className="p-6 flex justify-center items-center">
            <button className="w-24 h-24 bg-[url('/Assets/Images/Time_button.png')] bg-cover bg-center flex items-center justify-center text-white font-bold">
            {timeLeft}
            </button>
        </div>

        {/* Question */}
        <div className="flex justify-center items-center">
            <div className="w-[800px] h-[180px] bg-[url('/Assets/Images/Q-n-A-Question-Bar.png')] bg-cover bg-center rounded-[90px] shadow-md flex items-center justify-center text-white text-xl font-bold text-center px-8">
            {questions[currentQuestion].question}
            </div>
        </div>

        {/* Score */}
        <div className="p-6 flex justify-center items-center">
            <button className="w-24 h-24 bg-[url('/Assets/Images/Score_Button.png')] bg-cover bg-center flex items-center justify-center text-white font-bold">
            {currentQuestion + 1} / {questions.length}
            </button>
        </div>
        </div>


          {/* Options */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2  mt-6 pt-6">
                {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex justify-center items-center">
                    <button
                        className="w-[400px] h-[120px] px-8 bg-[url('/Assets/Images/QNABG.png')] bg-cover bg-center rounded-[50px] shadow-md flex items-center justify-center text-white font-bold text-center text-lg"
                        onClick={() => handleAnswer(index)}
                    >
                        {option}
                    </button>
                    </div>
                ))}
          </div>


        </div>
      </div>
    </div>
  );
}
