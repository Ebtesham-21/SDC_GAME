"use client";
import React, { useState } from "react";
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

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
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
      <div className="flex flex-grow justify-center items-center mx-0">
  <div className="grid max-w-6xl w-full">
    {/* Question */}
    <div className="flex justify-center items-center p-6">
      <div className="text-2xl text-white bg-blue-500 p-4 rounded-lg">
        {questions[currentQuestion].question}
      </div>
    </div>
    {/* Options */}
    <div className="grid grid-cols-2 gap-4 mt-4">
      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className="text-xl text-white bg-pink-500 p-4 rounded-lg"
          onClick={() => handleAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
   </div>
    </div>
    </div>
  );
}