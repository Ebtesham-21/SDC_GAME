import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Page(){
    return(
        <div className="min-h-screen flex flex-col bg-('/Assets/Images/BG.png') bg-cover bg-center]">
            <div className="absolute top-4 left-4">
                <Link href="">
                <button className="p-2">
                    <Image
                      src="/Assets/Images/Back_button.png"
                      alt="Back BUtton"
                      className="w-10 h-10"
                    />
                    
                </button>
                </Link>
            </div>

            <div className="flex flex-grow justify-center items-center">
                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="w-64 h-64 flex items-center justify-center rounded-md ">

                    </div>
                    <div className="w-64 h-64 flex items-center justify-center ">
                        
                    </div>
                </div>

            </div>


        </div>
    )
}