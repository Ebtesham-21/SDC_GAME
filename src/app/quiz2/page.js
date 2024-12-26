"use client";
import React, {useState} from "react";

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
const [selectedOption, setSelectedOption] = useState(null);
const [isCorrect, setIsCorrect] = useState(null);
const [showModal, setShowModal] = useState(false);

const handleOptionClick = (index) => {
    setSelectedOption(index);
};

const handleSubmit = () => {
    if(selectedOption === null) return;

    if(selectedOption === questions[currentQuestion].correct){
        //correct answer
        setIsCorrect(true);
        setTimeout(() => {

            if(currentQuestion + 1 < questions.length){
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
            } else {
                setShowModal(true);
            }
        }, 1000);
    } else {
        setIsCorrect(false);
        setTimeout(() => {
            setShowModal(true);
        }, 500);
    }
};

const handleCloseModal = () => {
    setShowModal(false);
    setIsCorrect(null);
    if(!isCorrect){
        setSelectedOption(null);
    }
};

return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
        {/* {Question Counter} */}
        <div className="text-lg text-white font-bold mb-6">
            Question {currentQuestion + 1}/{questions.length}
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center mb-6 text-xl w-4/5 md:w-3/5" >
            {questions[currentQuestion].question}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 md:w-3/5">
        {questions[currentQuestion].options.map((option, index) => (
            <button 
            key={index}
            onClick = {() => handleOptionClick(index)}
            className={`p-4 rounded-lg text-lg font-semibold shadow-md ${
                selectedOption === index 
                ? selectedOption === questions[currentQuestion].correct
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
                : "bg-white hover:bg-gray-200 text-gray-700"
            }`}
            >
                {option}
            </button>
        ))}
        </div>

        {/* Submit button */}
        <button 
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-200 "
        >
            Submit
        </button>

        {/* {modal} */}
        {
            showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center" >
                        <h2 
                        className="text-2xl font-bold mb-4"
                        >
                            {isCorrect === false 
                            
                            ? "Please Try Again"
                            : "Congratulations! You completed the quiz!"
                        }

                        </h2>
                        <button
                        onClick={handleCloseModal}
                        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200"
                        >
                            {isCorrect === false ? "Retry" : "Close"}

                        </button>
                    </div>
                </div>
            )
        }

    </div>
);



}