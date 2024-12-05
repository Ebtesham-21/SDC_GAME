import Image from "next/image";
import Link from "next/link";



export default function Page1(){

   
    
    return(
        <>
      
        <div className="bg-[url('/Assets/Images/BG.png')] bg-cover bg-center flex flex-col items-center justify-center" >
        <div class="grid grid-cols-3 pt-2 gap-6 p-6">
            <div> 
                <div className="relative w-[300px] h-[500px]">
                    <Image
                    src="/Assets/Images/Landing-Page_Diary.png"
                    alt="My Digital Diary"
                    layout="fill"
                    objectFit="contain"
                    className=" "
                    />


                </div>
                <div>
                <Link href="Page2" passHref>
                    <button  className="py-2 px-4 rounded-full shadow-lg transition-all">
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
            <div> 
                 <Image
                src="/Assets/Images/Landing-Page_Character.png"
                alt="Landing Page Character"
                width={300}
                height={500}
                />
                </div>

            <div>  <a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
                    <Image src="/Assets/Images/Landing-Page_Unicef_Button.png"  alt="UNICEF Logo" width={96} height={96}/>
                </a></div>
        </div>
        </div>
            {/* <div className="flex justify-center items-center gap-8">
            <div className="text-center">
                <div className="relative w-[300px] h-[500px]">
                    <Image
                    src="/Assets/Images/Landing-Page_Diary.png"
                    alt="My Digital Diary"
                    layout="fill"
                    objectFit="contain"
                    className=" "
                    />
                </div>

                <div  className="mt-6">
                    <Link href="Page2" passHref>
                    <button  className="py-2 px-4 rounded-full shadow-lg transition-all">
                    <Image
                    src="/Assets/Images/Landing-Page_Explore_Button.png"
                    alt="Explore Button"
                    width={400}
                    height={100}
                    className="cursor-pointer"

                    />    
                    </button>
                    </Link>
                </div>
             </div>

             <div>
                <Image
                src="/Assets/Images/Landing-Page_Character.png"
                alt="Landing Page Character"
                width={300}
                height={500}
                />
             </div>

             <div>

             </div>

            </div>
           
            <div className="absolute top-4 right-4">
                <a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
                    <Image src="/Assets/Images/Landing-Page_Unicef_Button.png"  alt="UNICEF Logo" width={96} height={96}/>
                </a>
            </div>


        </div> */}
        </>
    );
}