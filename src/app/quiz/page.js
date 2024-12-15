"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page(){
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
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        if(timeLeft === 0){
            handleNextQuestion();
            return;

        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return() => clearTimeout(timer);
    }, [timeLeft]);


    const handleAnswer = (index) => {
        if(index === questions[currentQuestion].correct){
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        if(currentQuestion + 1 < questions.length){
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(30);
        } else {
            setShowScore(true);
        }
    };


    if(showScore){
        return (
            <div className="min-h-screen flex items-center justify-center bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
                <div className="text-center">
                     <div className="text-3xl text-white bg-blue-500 p-4 rounded-lg">Total Score:</div>
                     <div className="text-5xl text-white bg-pink-500 p-4 rounded-lg mt-4">{score}/{questions.length}</div>
                </div>
            </div>
        );
    }

    return(
        <div className="min-h-screen flex flex-col  bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
            <div className="absolute top-4 left-4">
                <Link href="./qnatwo">
                <button className="p-2">
                    <Image src="/Assets/Images/Back_button.png" 
                    alt="Back Button"
                    width={50}
                    height={50}
                    />
                </button>
                </Link>
            </div>

            {/* quiz */}
            <div className="flex flex-grow justify-center items-center">
                <div className="grid grid-gap-4 max-w-4xl w-full ">
                    <div className="grid grid-cols-1 sm:grid-cols-3 ">
                        <div className=" p-4 flex justify-center items-center ">
                         
                        <button 
                         className="w-24 h-24 bg-[url('/Assets/Images/Time_button.png')] bg-cover bg-center flex items-center justify-center text-white font-bold">
                         {timeLeft}
                        </button>
                        </div>
                        <div 
                            className="w-full max-w-3xl h-32 bg-[url('/Assets/Images/Q-n-A-Question-Bar.png')] bg-cover bg-center flex items-center justify-center text-white text-lg font-semibold px-4 text-center">
                            Why keeping the food covered is important to prevent cholera?
                        </div>

                        <div className=" p-4 flex justify-center items-center ">
                      
                        <button 
                         className="w-24 h-24 bg-[url('/Assets/Images/Score_Button.png')] bg-cover bg-center flex items-center justify-center text-white font-bold">
                         {currentQuestion + 1} / {questions.length}
                        </button>
                        </div>
                    </div>

              
              

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className=" p-4 flex justify-center items-center ">
                   
                        <button 
                         className="w-600 h-400 p-10 bg-[url('/Assets/Images/Cholera_Q1_OpA.png')] bg-cover bg-center flex items-center justify-center text-white font-bold">
                         "So that no cholera carrying flies can sit on the food"
                        </button>
                            
                    </div>
                    <div className=" p-4 flex justify-center items-center">
                    <Image   
                            width={600}
                            height={600}
                            alt="home_Button"
                            src="/Assets/Images/Cholera_Q1_OpA.png" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className=" p-4 flex justify-center items-center ">
                    <Image   
                            width={600}
                            height={600}
                            alt="home_Button"
                            src="/Assets/Images/Cholera_Q1_OpA.png" />
                    </div>
                    <div className=" p-4 flex justify-center items-center">
                    <Image   
                            width={600}
                            height={600}
                            alt="home_Button"
                            src="/Assets/Images/Cholera_Q1_OpA.png" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}