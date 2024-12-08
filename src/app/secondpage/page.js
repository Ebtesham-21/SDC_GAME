"use client";
import {useState, useEffect, useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function page(){
    const [language, setLanguage] = useState('ENG');
    const [musicOn, setMusicOn] = useState(true);
    const audioRef = useRef(null);

    const handleLanguageChange = () => {
        const languages =['ENG', 'AR', 'KU'];
        const currentIndex = languages.indexOf(language);
        const nextIndex = (currentIndex + 1) % languages.length;
        setLanguage(languages[nextIndex]);
    };

    const toggleMusic = () => {
        setMusicOn(!musicOn);
    };


    const pageVariants = {
        initial: {
            opacity:0,
            x:100,
        },

        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut"}
        },

        exit: {
            opacity: 0,
            x: -100,
            transition: { duration: 0.5, ease: "easeIn"}
        }
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

    useEffect(() => {
        if(audioRef.current && musicOn){
            audioRef.current.volume = 0.2;
        }
    }, [musicOn]);

    return (
        <>
        <AnimatePresence mode="wait" >
        <motion.div>
        <div className="relative h-screen  text-white overflow-hidden bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
            <div className='absolute top-1/4 left-1/4'>
                <Image src={getImageSrc()} width={300} height={500} alt="welcome text" className="w-96 h-auto "/>
            </div>
            <div className='absolute top-1/4 right-1/4'>
            <Image
              src="/Assets/Images/Landing-Page_Character.png"
              alt="Landing Page Character"
              width={500}
              height={800}
            />
            </div>
            <div className='absolute top-1/4 right-10 flex flex-col space-y-4'>
            <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onHoverStart={() => console.log('hover started!')}>  
                 <button onClick={handleLanguageChange} className=' p-2 '><Image width={50}
                 height={50} alt='Language_button'  src="/Assets/Images/Language_Button.png"/>
                 </button>
            </motion.button>
            <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onHoverStart={() => console.log('hover started!')}>  
             
            <button onClick={toggleMusic} className=' p-2 '>{musicOn ? 
                <Image width={50}
                height={50} alt='music_button'  src="/Assets/Images/Music_Button.png"/> : 
                <Image width={50}
                height={50}  alt='music_off_button'  src="/Assets/Images/Music_off_button.png"/>}
                </button>
            </motion.button>

            <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onHoverStart={() => console.log('hover started!')}>  
             
             <Link href="./home" > 
                 <button  className=' p-2 '>
                <Image width={50}
                height={50} alt='home_Button'  src="/Assets/Images/Home_button.png"/> 
                </button></Link>
            </motion.button>

          
       
              

            </div>
            {musicOn && <audio ref={audioRef} src="/Assets/Audio/back-to-school-happy-ukulele-summer-music-244394.mp3" autoPlay loop />}
        </div>
        </motion.div>
        </AnimatePresence>
        </>
    );
}