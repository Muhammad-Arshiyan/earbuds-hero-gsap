import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Hero() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

        // Left Side Content Cascade
        tl.from('.hero-title-sub', { opacity: 0, y: -30, delay: 0.2 })
            .from('.hero-title-main', { opacity: 0, x: -50 }, '-=0.6')
            .from('.hero-badge', { opacity: 0, scale: 0.8 }, '-=0.6')
            .from('.hero-promo, .hero-cta', { opacity: 0, y: 30, stagger: 0.2 }, '-=0.4');

        // Right Side Visuals
        tl.from('.earbuds-box', { opacity: 0, y: 100, scale: 0.95, duration: 1.2 }, '-=1')
            .from('.earbud-left', { opacity: 0, y: -50, rotation: -15 }, '-=0.6')
            .from('.earbud-right', { opacity: 0, y: -50, rotation: 15 }, '-=0.5')
            .from('.box-dots div', { opacity: 0, scale: 0, stagger: 0.1 }, '-=0.4')
            .from('.box-img', { opacity: 0, scale: 0.5, ease: 'back.out(1.7)' }, '-=0.3');

    }, { scope: container });

    return (
        <div ref={container} className="overflow-hidden w-full min-h-screen flex items-center">
            {/* Adjusted padding to be responsive (px-4 on mobile, px-10 on tablet, px-16 on desktop) */}
            <div className="grid md:grid-cols-2 items-center px-4 sm:px-10 md:px-16 py-12 md:py-16 max-w-7xl mx-auto w-full">

                {/* Left Side (Text content) */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left z-10">
                    {/* Scaled down text for mobile viewports */}
                    <p className="hero-title-sub text-3xl sm:text-4xl md:text-[50px] italic mb-2 md:mb-4 font-['Great_Vibes']">
                        New Arrival
                    </p>

                    {/* Highly responsive typography scaling */}
                    <h1 className="hero-title-main text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
                        EARBUDS
                    </h1>

                    <button className="hero-badge bg-white text-black text-xs sm:text-sm px-5 py-2 rounded-full mt-4 hover:bg-gray-100 transition-colors shadow-md">
                        Experience with new technology
                    </button>

                    <div className="hero-promo flex items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                        <h2 className="text-5xl sm:text-6xl font-bold">30%</h2>
                        <p className="max-w-[200px] sm:max-w-xs text-xs sm:text-sm text-gray-200 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="hero-cta flex items-center gap-6 mt-6 md:mt-8">
                        <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            SHOP NOW
                        </button>
                        <h3 className="text-3xl sm:text-4xl font-bold">$250</h3>
                    </div>
                </div>

                {/* Right Side (Visual container) */}
                <div className="flex justify-center mt-20 md:mt-0 relative w-full">

                    {/* Earbuds Box Wrapper (Slightly adjusted top margin to account for absolute earbud layout shifts) */}
                    <div className="earbuds-box relative w-48 h-72 sm:w-56 sm:h-80 bg-white rounded-[40px] mt-16 md:mt-24 shadow-2xl">

                        {/* Earbuds - Adjusted widths and offsets for responsiveness */}
                        <div className="earbud-left absolute -top-24 sm:-top-32 left-8 sm:left-10 w-11 h-32 sm:w-14 sm:h-40 bg-gray-100 rounded-full shadow-md"></div>
                        <div className="earbud-right absolute -top-16 sm:-top-20 right-8 sm:right-10 w-11 h-24 sm:w-14 sm:h-32 bg-gray-100 rounded-full shadow-md"></div>

                        {/* Dots */}
                        <div className="box-dots absolute top-24 left-1/2 -translate-x-1/2 flex gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>

                        {/* Responsive Image Container replacing the emoji */}
                        <div className="box-img absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
                            🖼️
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;