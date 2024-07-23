function NavBar() {
    return (
        <>
            <section className="hidden bg-white inset-0 z-[100]">
                <div className="flex flex-row justify-between pt-[1.2rem] px-[0.7rem]">
                    <div className="mr-[0.5rem]">
                        <img src="NavBar/LogoBlack.png" className="w-[2.5rem] object-contain"/>
                    </div>

                    <div className="mr-[0.5rem]">
                        <img src="NavBar/Cancel.png"className="w-[2.4rem] object-contain"/>
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

            <section className="flex flex-row justify-between items-center pt-[1.2rem] px-[0.7rem]">
                <div className="flex flex-row items-center gap-[0.2rem]">
                    <img src="NavBar/logo.png" className="w-[2.5rem]"/>
                    <span className="text-white font-semi-bold text-[1.3rem] pb-[0.2rem]">Split Sphere</span>
                </div>
                
                <div className="mr-[0.5rem]">
                    <img src="NavBar/HBMenu.png"className="w-[2.4rem]"/>
                </div>
            </section>
        </>
    )

}

export default NavBar;