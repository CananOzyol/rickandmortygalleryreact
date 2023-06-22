import { useState } from 'react'
import CharacterCard from './CharacterCard';
import Characters from "./Characters.tsx";

export default function CharacterGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextCharacter = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const currentCharacter = Characters[currentIndex];

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <CharacterCard Character={currentCharacter} />
                    <button onClick={handleNextCharacter}>Next</button>
                </div>
            </div>
        </>
    );
}
