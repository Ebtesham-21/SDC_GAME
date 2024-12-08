import Image from "next/image";
import Link from "next/link";
import Page2 from "./pages/page2";

export default function Page1() {
  return (
    <>
      <div className="bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col items-center justify-center min-h-screen relative">
        {/* UNICEF Logo */}
        <div className="absolute top-4 right-4">
          <a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
            <Image
              src="/Assets/Images/Landing-Page_Unicef_Button.png"
              alt="UNICEF Logo"
              width={96}
              height={96}
            />
          </a>
        </div>

        <div className="flex flex-row items-center justify-center w-full max-w-screen-xl">
          {/* My Digital Diary Section */}
          <div className="flex flex-col items-center mr-8">
            <div className="relative w-[300px] h-[400px] mb-4">
              <Image
                src="/Assets/Images/Landing-Page_Diary.png"
                alt="My Digital Diary"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <Link href="./pages/page2.js" passHref>
                <button className="rounded-full">
                  <Image
                    src="/Assets/Images/Landing-Page_Explore_Button.png"
                    alt="Explore Button"
                    width={200}
                    height={100}
                    className="cursor-pointer"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Character Image */}
          <div className="mb-0 p-0">
            <Image
              src="/Assets/Images/Landing-Page_Character.png"
              alt="Landing Page Character"
               
           
             
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </>
  );
}