import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col">
      {/* Back Button */}
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

      {/* Centered Content */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-lg">
          {/* Row 1 */}
          <div className="flex justify-between mb-4">
            <div className="w-full max-w-xs p-4 mx-2 text-center">
              <Link href="./animatedVideos">
                <button className="p-2">
                  <Image
                    width={400}
                    height={200}
                    alt="home_Button"
                    src="/Assets/Images/Animated-Video-Icon.png"
                  />
                </button>
              </Link>
            </div>
            <div className="w-full max-w-xs p-4 mx-2 text-center">
              <Link href="./documentedVideos">
                <button className="p-2">
                  <Image
                    width={400}
                    height={200}
                    alt="home_Button"
                    src="/Assets/Images/Documented-Video-Icon.png"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs p-4 text-center">
              <Link href="./othervideos">
                <button className="p-2">
                  <Image
                    width={200}
                    height={200}
                    alt="home_Button"
                    src="/Assets/Images/Other-Video-Icon.png"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
