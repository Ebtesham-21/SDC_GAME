import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return(
        <div className="min-h-screen bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col">
            <div className='absolute top-4 left-4'>
                <Link href="./videos">
                    <button className='p-2'>
                        <Image width={50}
                        height={50}
                        alt="back_button"
                        src="/Assets/Images/Back_button.png"
                        />
                    </button>
                </Link>
            </div>
            {/* center content */}
            <div className='flex flex-grow items-center justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl px-4'>
                    <div className='p-4  flex justify-center items-center'>
                        <Link href="">
                        <button className='p-2'>
                            <Image 
                            width={400}
                            height={400}
                            className='w-[300px] h-[300px] max-w-none max-h-none p-2'
                            alt="Animated Video 1"
                            src="/Assets/Images/Doc-Video-Button-1.png"
                            />
                        </button>
                        </Link>
                    </div>

                    {/* column 2 */}

                    <div className='p-4 flex justify-center items-center'>
                    <Link href="">
                        <button className='p-2'>
                        <Image 
                            width={400}
                            height={400}
                            className='w-[300px] h-[300px] max-w-none max-h-none p-2'
                            alt="Animated Video 2"
                            src="/Assets/Images/Doc-Video-Button-2.png"
                            />
                        </button>
                        </Link>

                    </div>

                         {/* column 3 */}
                    <div className='p-4 flex justify-center items-center'>
                    <Link href="">
                        <button className='p-2'>
                        <Image 
                            width={400}
                            height={400}
                            className='w-[300px] h-[300px] max-w-none max-h-none p-2'
                            alt="Animated Video 2"
                            src="/Assets/Images/Doc-Video-Button-3.png"
                            />
                        </button>
                        </Link>

                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}