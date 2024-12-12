import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Page(){
    return (
        <>
        <div className="min-h-screen bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col">
            <div className="absolute top-4 left-4">
                <Link href="">
                <button className="p-2">
                <Image
                            width={50}
                            height={50}
                            alt="home_Button"
                            src="/Assets/Images/Back_button.png"
                        />
                </button>
                </Link>
            </div>

            {/* content */}
            <div className="justify-center items-center grid grid-rows-3 grid-flow-col gap-4">
                <div className="bg-white justify-center items-center" >
                    <div className="columns-3 p-4">
                        <div>
                        <button
                        className="w-32 h-32 bg-[url('/Assets/Images/button-bg.png')] bg-cover bg-center rounded-md shadow-md"
                        >
                        <span className="text-white">Click Me</span>
                        </button>
                        </div>
                        <div>Question</div>
                        <div>01/10</div>
                    </div>

                </div>
  
                <div>
                 <div className="bg-white justify-center items-center" >
                    <div className="columns-2 p-4 m-10">
                        <div className=" justify-center items-center p-4">A</div>
                        <div className=" justify-center items-center p-4">B</div>
                        
                    </div>

                 </div>
                </div>
                <div>
                <div className="bg-white justify-center items-center" >
                    <div className="columns-2 p-4 m-10">
                        <div className=" justify-center items-center p-4">C</div>
                        <div className=" justify-center items-center p-4">D</div>
                        
                    </div>

                 </div>

                    
                </div>
            </div>
        </div>
        </>
    )
}