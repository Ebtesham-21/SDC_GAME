import react from "react";
import Image from "next/image";

export default function Page(){
    return (
        <div className="relative min-h-screen overflow-hidden bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col">
            <div className="absolute top-4 left-4">
            <button className="p-2">
              <Image
                width={50}
                height={50}
                alt="home_Button"
                src="/Assets/Images/Home_button.png"
              />
            </button>
            </div>

            {/* Heading */}
            <div className="flex justify-center items-center mt-12 pt-40 sm:mt-8">
            <Image
                  width={400}
                  height={600}
                  alt="home_Button"
                  src="/Assets/Images/Chapter_page_Title_Button.png"
                />
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl px-4">
                    <div className="p-4   flex items-center justify-center">
                        <button className="p-2">
                            <Image
                             width={200}
                             height={200}
                             alt="home_Button"
                             src="/Assets/Images/Chapter_page_Button_01.png"
                            />
                        </button>
                    </div>
                    <div className="p-4   flex items-center justify-center">
                        <button className="p-2">
                            <Image
                             width={200}
                             height={200}
                             alt="home_Button"
                             src="/Assets/Images/Chapter_page_Button_02.png"
                            />
                        </button>
                    </div>
                    <div className="p-4   flex items-center justify-center">
                        <button className="p-2">
                            <Image
                             width={200}
                             height={200}
                             alt="home_Button"
                             src="/Assets/Images/Chapter_page_Button_03.png"
                            />
                        </button>
                    </div>
                   
                </div>

            </div>

        </div>
    );
}