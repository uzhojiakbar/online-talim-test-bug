import React, { useEffect, useState } from 'react';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true); 
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 rounded-full transition duration-300 ease-in-out text-blue-500 text-4xl`}
                    title="Scroll to top">
                    <i class="fa-solid fa-circle-up"></i>
                </button>
            )}
        </>
    );
}

export default ScrollToTop;
