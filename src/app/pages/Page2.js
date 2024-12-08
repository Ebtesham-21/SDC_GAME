"use client";
import {useState} from 'react';
import Image from "next/image";

export default function Page2(){
    const [language, setLanguage] = useState('ENG');
    const [musicOn, setMusicOn] = useState(true);

    const handleLanguageChange = () => {
        const languages =['ENG', 'AR', 'KU'];
        const currentIndex = languages.indexOf(language);
        const nextIndex = (currentIndex + 1) % languages.length;
        setLanguage(languages[nextIndex]);
    };

    const toggleMusic = () => {
        setMusicOn(!musicOn);
    };

    const getImageSrc = () => {
        switch (language) {
            case 'AR':
                return '/Assets/Images/Kabbu_Speech_Landing_page.png';
            case 'KU':
                return '/Assets/Images/Kabbu_Speech_Landing_page.png';
            default:
                return '/Assets/Images/Kabbu_Speech_Landing_page.png';
        }
    };

    return (
        <div className='relative h-screen bg-blue-900 text-white'>
            <div className='absolute top-1/4 left-1/4'>
                <Image src={getImageSrc()} width={300} height={500} alt="welcome text" className="w-96 h-auto "/>
            </div>
            <div className='absolute top-1/4 right-1/4'>
                <Image   width={300}
                height={500} src="/Assets/Images/Landing-Page_Character.png"    />
            </div>
            <div className='absolute top-1/4 right-10 flex flex-col space-y-4'>
            <button onClick={handleLanguageChange} className=' p-2 '><Image width={50}
                height={50}  src="/Assets/Images/Language_Button.png"/></button>
            <button onClick={toggleMusic} className=' p-2 '>{musicOn ? 
                <Image width={50}
                height={50} alt='music_button'  src="/Assets/Images/Music_Button.png"/> : 
                <Image width={50}
                height={50}  alt='music_off_button'  src="/Assets/Images/Music_off_button.png"/>}
                </button>
                <button  className=' p-2 '>
                <Image width={50}
                height={50}  src="/Assets/Images/Home_button.png"/> 
                </button>

            </div>
            {musicOn && <audio src="/Assets/Audio/back-to-school-happy-ukulele-summer-music-244394.mp3" autoPlay loop/>}
        </div>
    );
}