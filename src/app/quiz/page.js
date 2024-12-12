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
            <div className="flex-grow flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full px-4">

                    <div className="col-span-1 sm:col-span-1 flex justify-center items-center bg-white p-4  ">
                        <div>question number: 01</div>
                    </div>
                    <div className="col-span-1 sm:col-span-1 flex justify-center items-center p-4 bg-white ">
                        <div> Question</div>
                    </div>
                    <div className="col-span-1 sm:col-span-1 flex justify-center items-center p-4 bg-white ">
                        <div> 01/10</div>
                    </div>

                    {/* Second row */}
                
                </div>
            </div>
        </div>
        </>
    )
}