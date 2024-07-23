import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import { useRef } from 'react';

function OurWork() {
    const slideRef = useRef(null);

    const properties = {
        duration: 5000,
        autoplay: false,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: "ease",
        indicators: (i) => <div className="indicator bg-white rounded h-[0.5rem] w-[0.5rem] mx-[0.2rem]"></div>
    };

    const slideImages = [
        "OurWork/eventdrop.png",
        "OurWork/acc.png"
    ]

    return(
        <>
            <span className="text-white text-[8vw] font-bold block mt-[6rem] mb-[2rem] w-[85vw] mx-auto pl-[0.8rem]">Our Work</span>
            
            <div className="w-[80vw] mx-auto">
                <Slide ref={slideRef} {...properties}>
                    {slideImages.map((each, index) => (
                    <div key={index} className="each-slide">
                        <img className="lazy" src={each} alt="sample" />
                    </div>
                    ))}
                </Slide>
            </div>

        </>
    )
}

export default OurWork;