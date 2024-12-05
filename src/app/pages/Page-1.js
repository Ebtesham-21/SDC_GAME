import Image from "next/image";
import Link from "next/link";
import logo from "../Assets/Images/Landing-Page_Unicef_Button.png";

export default function Home(){
    return(
        <div className="h-secreen bg-gradient-to-br from-green-400 to-blue-600 flex flex-col items-center justify-center">
            <div className="text-center">
                <div className="bg-red-600 text-white rounded-lg shadow-md p-6">
                    <h1 className="text-4xl font-bold">My Digital Diary</h1>
                </div>

                <div className="mt-6">
                    <Link href="/explore">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-full shadow-lg transition-all">Explore</button></Link>
                </div>
             </div>
            <div className="absolute top-4 right-4">
                <a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
                    <Image src={logo} alt="UNICEF Logo" width={96} height={96}/>
                </a>
            </div>


        </div>

    )
}