import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const textArray = ["Hoang Vinh Nguyen", ""];
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if(isDeleting) {
                if(charIndex > 0) {
                    setDisplayedText(textArray[textArrayIndex].substring(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                }else{
                    setIsDeleting(false);
                    setTextArrayIndex((textArrayIndex + 1) % textArray.length);
                }
            }else {
                if(charIndex < textArray[textArrayIndex].length){
                    setDisplayedText(textArray[textArrayIndex].substring(0, charIndex + 1));
                    setCharIndex(prev => prev + 1);
                }else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 100);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, textArrayIndex]);

    return (
        <section id="heroSection" className="hero-section" style={{
            width: "100%",
            height: "100vh", // Full viewport height
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "flex-start", // Align to the top
            paddingTop: "15rem", // Adjust this as needed
            backgroundColor: "#f5fcff", // Or your custom background color
            textAlign: "center"
        }}>
            <div className="hero--section--content--box">
                <div className="hero--section--content hero-title">
                    <h1 className="hero--section--title"></h1>
                    <h1 className="hero--section--title" style={{
                        fontSize: "3.5rem",
                        fontWeight: 700,
                        margin: 0,
                        color: "#282938",
                        lineHeight: "1.2",
                        whiteSpace: "nowrap"
                    }}>
                        <span>{displayedText}</span>
                        <span className="cursor">|</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
