import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function page() {
  return (
    <>
      <div className="bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
        {/* UNICEF Logo */}
        <div className="absolute top-4 right-4">
          <a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
            <Image
              src="/Assets/Images/Landing-Page_Unicef_Button.png"
              alt="UNICEF Logo"
              width={96}
              height={96}
              className="fade-in"
            />
          </a>
        </div>

        <div className="flex flex-row items-center justify-center w-full max-w-screen-xl">
          {/* My Digital Diary Section */}
          <div className="flex flex-col items-center mr-8  slide-in-left">
            <div className="relative w-[300px] h-[400px] mb-4">
              <Image
                src="/Assets/Images/Landing-Page_Diary.png"
                alt="My Digital Diary"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              {/* Link to Page2 */}
              
              <Link href="./secondpage" >
              
                <button className="rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                
                  <Image
                    src="/Assets/Images/Explore-Blue-01.png"
                    alt="Explore Button"
                    width={300}
                    height={100}
                    className="cursor-pointer fade-in"
                  />
         
                </button>
              </Link>
          
            </div>
          </div>

          {/* Character Image */}
          <div className="mb-0 p-0 slide-in-bottom">
            <Image
              src="/Assets/Images/Landing-Page_Character.png"
              alt="Landing Page Character"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
}
