import { useTransition } from "react";
import { useState } from "react";

function NavBar() {
    let [navBarStatus, setNavBarStatus] = useState(false);
    let [displayHoverNav, setdisplayHoverNav] = useState(false);

    const body = document.body;

    body.onscroll = function(){
        const fixedNav = document.getElementById('fixedNav');
        const hoverNav = document.getElementById('hoverNav');
    
        if(isScrolledIntoView(fixedNav)){
            if (displayHoverNav == true){
                hoverNav.style.opacity = 1;
                increaseOpacity(hoverNav, 200);
            }
            setdisplayHoverNav(false);
        } else {
            if (displayHoverNav == false){
                hoverNav.style.opacity = 0;
                increaseOpacity(hoverNav, 200);
            }
            setdisplayHoverNav(true);
        }
    };

    function changeNavBar() {
        if (navBarStatus){
            setNavBarStatus(false);
        } else {
            setNavBarStatus(true);
        }
    }

    return (
        <>
            <section id='hoverNav' className={`${displayHoverNav ? '' : 'hidden'} fixed flex flex-row z-[100] bg-gradient-to-r from-[#0F0D1A] to-[#5a4e8a] justify-between items-center pt-[1.2rem] px-[0.7rem] pb-[1.2rem] w-[100%]`}>
                <div className="flex flex-row items-center gap-[0.2rem]">
                    <img src="NavBar/logo.png" className="w-[2.5rem]"/>
                </div>
                
                <div className="mr-[0.5rem]">
                    <img src="NavBar/HBMenu.png" onClick={changeNavBar} className="w-[2.4rem]"/>
                </div>
            </section>

            <section className={`${navBarStatus ? '' : 'hidden'} fixed bg-white inset-0 z-[100]`}>
                <div className="flex flex-row justify-between pt-[1.2rem] px-[0.7rem]">
                    <div className="mr-[0.5rem]">
                        <img src="NavBar/LogoBlack.png" className="w-[2.5rem] object-contain"/>
                    </div>

                    <div className="mr-[0.5rem]">
                        <img src="NavBar/Cancel.png" onClick={changeNavBar} className="w-[2.4rem] object-contain"/>
                    </div>
                </div>

                <div className="text-[1.8rem] font-semibold font-Hind mt-[4rem] mr-[5rem] flex flex-col justify-center items-center">
                    <div>
                        <h1 className="pb-[0.7rem]">Our Expertise</h1>
                        <h1 className="pb-[0.7rem]">Recent Work</h1>
                        <h1 className="pb-[0.7rem]">About Us</h1>
                        <h1 className="pb-[0.7rem]">Blogs</h1>
                    </div>
                </div>

                <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] w-[17rem] mx-auto">
                    <span className="text-[1.2rem] font-medium">Get in touch:</span>
                    <button className="bg-[#474A8C] px-[4.6rem] pt-[0.6rem] pb-[0.8rem] mt-[0.7rem] text-white text-[1.6rem]">Contact Us</button>
                    <div className="bg-black w-[17rem] h-[0.1rem] mx-auto mt-[1.5rem] mb-[0.6rem]" />
                    <span className="font-semibold">Austin, Texas</span>
                </div>
            </section>

            <section id="fixedNav" className="flex flex-row justify-between items-center pt-[1.2rem] px-[0.7rem]">
                <div className="flex flex-row items-center gap-[0.2rem]">
                    <img src="NavBar/logo.png" className="w-[2.5rem]"/>
                    <span className="text-white font-semi-bold text-[1.3rem] pb-[0.2rem]">Split Sphere</span>
                </div>
                
                <div className="mr-[0.5rem]">
                    <img src="NavBar/HBMenu.png" onClick={changeNavBar} className="w-[2.4rem]"/>
                </div>
            </section>
        </>
    )

}

export default NavBar;


// UTILITY FUNCTIONS //

function isScrolledIntoView(el)
{
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function increaseOpacity(element, duration) {
    var opacity = 0;
    var intervalTime = 10; // Time interval in milliseconds

    // Calculate increment based on interval time and total duration
    var increment = intervalTime / duration;

    var timer = setInterval(function() {
        opacity += increment;
        element.style.opacity = opacity;

        // Stop the interval when opacity reaches 1
        if (opacity >= 1) {
            clearInterval(timer);
        }
    }, intervalTime);
}