import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function page() {
  return (
    <>
      <div className="bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col items-center pt-80 min-h-screen relative overflow-hidden">
        
        <div className="absolute top-4 left-4">
                <Link href="./qnaone">
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

        <div className="flex flex-row items-center justify-center w-full max-w-screen-xl">
          {/* My Digital Diary Section */}

          <div className="mb-0 p-0 slide-in-bottom">
            <Image
              src="/Assets/Images/ch-2.png"
              alt="Landing Page Character"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col items-center mr-8 slide-in-bottom ">
            <Link href="./quiz">
            <div className="relative w-[300px] h-[400px] mb-4">
              <Image
                src="/Assets/Images/QnA_page_Speech_2.png"
                alt="My Digital Diary"
                layout="fill"
                objectFit="contain"
              />
            </div>
         
            </Link>
            <div>
           
          
            </div>
          </div>

          {/* Character Image */}
       
        </div>
      </div>
    </>
  );
}
