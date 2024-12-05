import {useState} from 'react';

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
                return '/Kabbu Speech_Landing page';
            case 'KU':
                return '/Kabbu Speech_Landing page';
            default:
                return '/Kabbu Speech_Landing page';
        }
    };

    return (
        <div className='relative h-screen bg-blue-900 text-white'>
            <div className='absolute top-1/4 left-1/4'>
                <Image src={getImageSrc()}
            </div>
        </div>
    )
}