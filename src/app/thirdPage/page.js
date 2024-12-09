import React from "react";
import Image from "next/image";

export default function page(){
    const pageVariants = {
                 initial: { opacity: 0, scale: 0.8 }, 
                 animate: { opacity: 1, scale: 1 },   
             exit: { opacity: 0, scale: 1.2 }, 
    };

    return (
        <>
        <div className="flex flex-wrap justify-between gap-4 p-8 relative h-screen  text-white overflow-hidden bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
            <div className="flex-grow  shadow-md p-4 rounded-md w-full sm:w-1/3">
            <div className="grid grid-cols-2 gap-4">
                <div className=" text-white p-4 rounded-md"> 
                <button  className=' p-2 '>
                    <Image width={200}
                    height={200} alt='home_Button'  src="/Assets/Images/2nd-page-button_01_N.png"/> 
                </button>
                </div>
                <div className=" text-white p-4 rounded-md"> <button  className=' p-2 '>
                    <Image width={200}
                    height={200} alt='home_Button'  src="/Assets/Images/2nd-page-button_04_N.png"/> 
                </button></div>
                <div className=" text-white p-4 rounded-md"> 
                    <button  className=' p-2 '>
                    <Image width={200}
                    height={200} alt='home_Button'  src="/Assets/Images/2nd-page-button_02_N.png"/> 
                    </button>
                </div>
                 <div className=" text-white p-4 rounded-md"> 
                    <button  className=' p-2 '>
                    <Image width={200}
                    height={200} alt='home_Button'  src="/Assets/Images/2nd-page-button_05_N.png"/> 
                    </button>
                </div>
         
                <div className=" text-white p-4 rounded-md"> 
                    <button  className=' p-2 '>
                    <Image width={200}
                    height={200} alt='home_Button'  src="/Assets/Images/2nd-page-button_03_N.png"/> 
                    </button>
                </div>
                <div className=" text-white p-4 rounded-md"> 
                    <button  className=' p-2 '>
                    <Image width={200}
                    height={200} alt='home_Button'  src="/Assets/Images/2nd-page-button_06_N.png"/> 
                    </button>
                </div>
            </div>
            </div>

            <div className="flex-grow  shadow-md p-4 rounded-md w-full sm:w-1/3">
                <h2 className="text-lg font-semibold mb-4">Second Div</h2>
                <p className="text-gray-600">This is the content for the second div.</p>
            </div>

            <div className="flex-grow  shadow-md p-4 rounded-md w-full sm:w-1/3">
                 <h2 className="text-lg font-semibold mb-4">Third Div</h2>
                 <p className="text-gray-600">This is the content for the third div.</p>


            </div>
        </div>
        </>
    );
};