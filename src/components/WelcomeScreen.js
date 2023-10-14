function WelcomeScreen(){
    return <>
    <section className="LandingComponent">
        <div className="relativeContainer relative tablet:hidden laptop:hidden desktop:hidden w-full h-[25rem]">
            <img className="w-[15rem] absolute left-0 top-[4rem]" src="landingComponentGraphics/leftGraphic.png"></img>
            <img className="w-[8.5rem] absolute right-0 top-0" src="landingComponentGraphics/rightGraphic.png"></img>
        </div>

        <div className="font-Hind font-semibold text-[3.3rem] text-left tablet:text-center block w-[18rem] tablet:w-[24rem] mx-auto">
            <span className="bg-gradient-to-r from-[#7177EB] to-[#D09AFF] text-transparent bg-clip-text">Digital Solutions</span>
            <h1 className="text-[#FFFFFF] tablet:mt-[-0.5rem]">Real Outcomes</h1>
        </div>

        <div className="block tablet:hidden laptop:hidden desktop:hidden mt-[0.5rem]">
            <p className="text-[0.82rem] font-Hind text-[#FFFFFF] w-[17.7rem] m-auto">Through user-centric desings and efficient<br /> coding, we create products (Websites, Apps and <br /> more) that drive undeniable success</p>
        </div>

        <div className="phone:hidden mt-[0.5rem]">
            <p className="text-[0.62rem] font-Hind text-center text-[#FFFFFF] w-[17.7rem] tablet:w-[25rem] m-auto">With unwavering commitment to user centric designs and mastery of efficient coding, we create digital solutions ( Websites, Apps and more ) that are catalyst for undeniable success</p>
        </div>
        
        <button className="font-Hind font-medium text-[1.8rem] text-[#FFFFFF] bg-[#474A8C] phone:px-[5.5rem] tablet:px-[3.6rem] pt-[0.6rem] pb-[0.2rem] block mx-auto mt-[3.2rem] tablet:mt-[2.5rem] phone:rounded-[1.3rem] tablet:rounded-[2rem]">Let's Talk</button>
    </section>
    </>
}

export default WelcomeScreen;