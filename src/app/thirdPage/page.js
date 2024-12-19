import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  };

  return (
    <>
      <div className="flex h-screen text-white overflow-hidden bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
        {/* First Div */}
        <div className="flex-grow p-4 w-full  sm:w-1/3">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-white p-2 transform transition-all duration-300 hover:scale-110  ">
            <Link href="./childsurvival" > 
              <button className="p-2 ">
                <Image
                  width={600}
                  height={200}
                  alt="home_Button"
                  src="/Assets/Images/Child_Survival-01.png"
                />
              </button>
              </Link>
            </div>
            <div className="text-white p-2 transform transition-all duration-300 hover:scale-110  ">
            <Link href="./childsurvival" > 
              <button className="p-2 ">
                <Image
                  width={600}
                  height={200}
                  alt="home_Button"
                  src="/Assets/Images/Social_Protection-01.png"
                />
              </button>
              </Link>
            </div>
            <div className="text-white p-2 transform transition-all duration-300 hover:scale-110  ">
            <Link href="./childsurvival" > 
              <button className="p-2 ">
                <Image
                  width={600}
                  height={200}
                  alt="home_Button"
                  src="/Assets/Images/Child_Rights-01.png"
                />
              </button>
              </Link>
            </div>
            <div className="text-white p-2 transform transition-all duration-300 hover:scale-110  ">
            <Link href="./childsurvival" > 
              <button className="p-2 ">
                <Image
                  width={600}
                  height={200}
                  alt="home_Button"
                  src="/Assets/Images/Out_of_school-01.png"
                />
              </button>
              </Link>
            </div>
            <div className="text-white p-2 transform transition-all duration-300 hover:scale-110  ">
            <Link href="./childsurvival" > 
              <button className="p-2 ">
                <Image
                  width={600}
                  height={200}
                  alt="home_Button"
                  src="/Assets/Images/Climate_change-01.png"
                />
              </button>
              </Link>
            </div>
            <div className="text-white p-2 transform transition-all duration-300 hover:scale-110  ">
            <Link href="./childsurvival" > 
              <button className="p-2 ">
                <Image
                  width={600}
                  height={200}
                  alt="home_Button"
                  src="/Assets/Images/Early_childhood-01.png"
                />
              </button>
              </Link>
            </div>
            
          </div>
        </div>

        {/* Second Div - Center Character */}
        <div className="flex-grow bottom-0 flex items-center justify-center">
          <Image
            src="/Assets/Images/ch-1.png"
            alt="Landing Page Character"
            width={300}
            height={400}
          />
        </div>

        {/* Third Div - Buttons on the Right */}
        <div className="flex-grow p-4 w-full sm:w-1/3 flex flex-col items-end justify-center">
          <div className="flex flex-col gap-4 items-center">
            <button className="p-2">
              <Image
                width={50}
                height={50}
                alt="Music_Button"
                src="/Assets/Images/Music_Button.png"
              />
            </button>
            <button className="p-2">
              <Image
                width={50}
                height={50}
                alt="Language_Button"
                src="/Assets/Images/Language_Button.png"
              />
            </button>
            <Link href="/">
            <button className="p-2">
              <Image
                width={50}
                height={50}
                alt="home_Button"
                src="/Assets/Images/Home_button.png"
              />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
