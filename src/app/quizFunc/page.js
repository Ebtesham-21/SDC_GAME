"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";

export default function QuizGame() {
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
        // add more questions here
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

        return () => clearTimeout(timer);

    }, [timeLeft]);

    const handleAnswer = (index) => {
        if(index === questions [currentQuestion].correct){
            setScore(score+1);
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

    if(showScore) {
        return (
            <>
            <div className="min-h-screen flex items-center justify-center bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
            <div className="text-center">
                <div className="text-3xl text-white bg-blue-500 p-4 rounded-lg"> Total Score: </div>
                <div className="text-5xl text-white bg-pink-500 p-4 rounded-lg mt-4">
                    {score}/{questions.length}
                </div>
            </div>
                

            </div>
            
            </>
        );
    }


    return (
        <div className="min-h-screen flex flex-col  bg-[url('/Assets/Images/BG.png')]  bg-cover bg-center">
            <div className="absolute top-4 left-4">
                <button className="p-2 bg-green-500 rounded-full">
                    <Image
                     src="/Assets/Images/Back_button.png"
                     alt="Back Button"
                     width={50}
                     height={50}

                    
                    
                    />
                </button>
            </div>

            {/* question and timer */}
            <div className="flex justify-between items-center px-8 py-4">
                <div className="text-3xl bg-blue-500 text-white p-4 rounded-full">{timeLeft}

                </div>
                <div className="text-3xl text-white bg-pink-500 p-4 rounded-full">
                    {currentQuestion + 1}/{questions.length}
                </div>
            </div>

            {/* questions */}
            <div className="flex justify-center items-center py-8">
                <div className="text-2xl text-white bg-red-500 p-6 rounded-lg max-w-2xl text-center">
                    {questions[currentQuestion].question}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">

            </div>
        </div>
    )

    
}