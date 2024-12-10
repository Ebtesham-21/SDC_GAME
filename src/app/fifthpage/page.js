import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
    return(
        <div className="min-h-screen overflow-hidden bg-[url('/Assets/Images/BG.png')] bg-cover bg-center   flex flex-col">
            <div className="absolute top-4 left-4">
            <Link href="./childsurvival">
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

            <div className="flex flex-grow justify-center items-center">
                <div className="grid gap-4">
                    <div className="p-4  rounded-md text-center">
                    <Link href="./videos">
                    <button className="p-2">
                    <Image
                         width={400}
                         height={200}
                          alt="home_Button"
                          src="/Assets/Images/Page_04_Button_1_NEW.png"
                    />
                    </button>
                    </Link>
                    </div>
                    <div className="p-4  rounded-md text-center">
                    <button className="p-2">
                    <Image
                         width={400}
                         height={200}
                          alt="home_Button"
                          src="/Assets/Images/Page_04_Button_3_NEW.png"
                    />
                    </button>
                    </div>
                    <div className="p-4  rounded-md text-center">
                    <button className="p-2">
                    <Image
                         width={400}
                         height={200}
                          alt="home_Button"
                          src="/Assets/Images/Page_04_Button_2_NEW.png"
                    />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}