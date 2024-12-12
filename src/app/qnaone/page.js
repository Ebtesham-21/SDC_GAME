import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
            {/* Back Button */}
            <div className="absolute top-4 left-4">
                <Link href="./resource">
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

            {/* Main Content */}
            <div className="flex flex-grow m-0 p-0 justify-center items-center">
                <div className="flex flex-wrap gap-16 justify-center">
                    {/* Character Image */}
                    <div className="flex items-center justify-center rounded-md">
                        <div className="p-0">
                            <Image
                                src="/Assets/Images/ch-3.png"
                                alt="Landing Page Character"
                                width={600}
                                height={600}
                               
                                
                               
                             
                            />
                        </div>
                    </div>

                    {/* Placeholder for Additional Content */}
                    <div className=" flex items-center justify-center">
                    <Link href="./qnatwo">
                    <button>   
                    <Image src="/Assets/Images/QnA_page_Speech.png" width={400} height={400} alt="welcome text" />
                    </button> 
                    </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
