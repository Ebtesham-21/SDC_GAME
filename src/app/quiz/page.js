import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page(){
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
                <div className="grid grid-gap-4 max-w-4xl w-full px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className=" p-4 flex justify-center items-center ">
                            <Image   
                            width={100}
                            height={100}
                            alt="home_Button"
                            src="/Assets/Images/Time_button.png" />
                        </div>
                        <div className=" p-4 flex justify-center items-center ">
                        <Image   
                            width={600}
                            height={600}
                            alt="home_Button"
                            src="/Assets/Images/Q-n-A-Question-Bar.png" />
                        </div>
                        <div className=" p-4 flex justify-center items-center ">
                        <Image   
                            width={100}
                            height={100}
                            alt="home_Button"
                            src="/Assets/Images/Score_Button.png" />
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