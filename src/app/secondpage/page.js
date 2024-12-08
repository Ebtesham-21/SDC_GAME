"use client";
import {useState, useEffect, useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { stagger } from 'motion';
import gsap from "gsap";

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

    const imageVariants =  {
        initial: {
            y:"100vh",
            opacity: 0,
        },

        animate: {
            y:0, 
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },

        exit: {
            y:"100vh",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn",
            },
        },
    };


    const toggleMusic = () => {
        setMusicOn(!musicOn);
    };


    const pageVariants = {
        initial: { opacity: 0, scale: 0.8 }, // Start small and invisible
  animate: { opacity: 1, scale: 1 },   // Grow to normal size and fade in
  exit: { opacity: 0, scale: 1.2 }, 
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

        gsap.from(".landing-page", {
            duration: 1.5,
            opacity: 0,
            y: 100,
            ease: "power4.out",
        });
        gsap.from(".landing-character", {
            duration: 1.5,
            opacity: 0,
            x: 100,
            ease: "power4.out",
            delay: 0.5,
        });

        gsap.from(".buttons", {
            duration:1,
            opacity: 0,
            y:50,
            ease: "power4.out",
            delay: 1.5,
            stagger: 0.2,
        });


         // Audio play logic for background music
        if(audioRef.current && musicOn){
            audioRef.current.volume = 0.2;
        }
    }, [musicOn]);

   
    return (
        <>
        <AnimatePresence mode="wait" >
        <motion.div variants={pageVariants}>
        <div className="relative h-screen  text-white overflow-hidden bg-[url('/Assets/Images/BG.png')] bg-cover bg-center">
        <motion.div
        className="absolute top-1/4 left-1/4 landing-image"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        >
       
                <Image src={getImageSrc()} width={300} height={500} alt="welcome text" className="w-96 h-auto "/>
    

        </motion.div>
          
            <motion.div className='absolute top-1/4 right-1/4 ' 
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            
            >

            <Image
              src="/Assets/Images/Landing-Page_Character.png"
              alt="Landing Page Character"
              width={500}
              height={800}
            />
            </motion.div>
            
            <div className='absolute top-1/4 right-10 flex flex-col space-y-4'>
            <motion.div
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onHoverStart={() => console.log('hover started!')}>  
                 <button onClick={handleLanguageChange} className=' p-2 '><Image width={50}
                 height={50} alt='Language_button'  src="/Assets/Images/Language_Button.png"/>
                 </button>
            </motion.div>
            <motion.div
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onHoverStart={() => console.log('hover started!')}>  
             
            <button onClick={toggleMusic} className=' p-2 '>{musicOn ? 
                <Image width={50}
                height={50} alt='music_button'  src="/Assets/Images/Music_Button.png"/> : 
                <Image width={50}
                height={50}  alt='music_off_button'  src="/Assets/Images/Music_off_button.png"/>}
                </button>
            </motion.div>

            <motion.div
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 onHoverStart={() => console.log('hover started!')}>  
             
             <Link href="./home" > 
                <button  className=' p-2 '>
                    <Image width={50}
                 height={50} alt='home_Button'  src="/Assets/Images/Home_button.png"/> 
                </button>
            </Link>
            </motion.div>

          
       
              

            </div>
            {musicOn && <audio ref={audioRef} src="/Assets/Audio/back-to-school-happy-ukulele-summer-music-244394.mp3" autoPlay loop />}
        </div>
        </motion.div>
        </AnimatePresence>
        </>
    );
}