function WelcomeScreen(){
    return <>
    <section className="LandingComponent relative pt-[3rem] pb-[4rem] tablet:pb-[3rem]">
        <div className="relativeContainer relative tablet:hidden laptop:hidden desktop:hidden w-full h-[24rem]">
            <img className="w-[14rem] absolute left-0 top-[3rem]" src="landingComponentGraphics/leftGraphic.png" />
            <img className="w-[8rem] absolute right-0 top-0" src="landingComponentGraphics/rightGraphic.png" />
        </div>

        <div className="font-Hind font-semibold text-[3.0rem] tablet:text-[2.7rem] desktop:text-[5rem] text-left tablet:text-center laptop:text-center desktop:text-center block w-[16rem] tablet:w-[24rem] laptop:w-[24rem] desktop:w-[30rem] desktop:w-[37rem] mx-auto mt-[-1rem]">
            <h1 className="bg-gradient-to-r from-[#7177EB] to-[#D09AFF] text-transparent bg-clip-text leading-[4rem]">Digital Solutions</h1>
            <h1 className="text-[#FFFFFF] tablet:mt-[-0.5rem] laptop:mt-[-1rem] desktop:mt-[-1.7rem] leading-[3.7rem]">Real Outcomes</h1>
        </div>

        <div className="block tablet:hidden laptop:hidden desktop:hidden mt-[0.5rem]">
            <p className="text-[0.7rem] font-Hind text-[#FFFFFF] w-[16.0rem] m-auto">Through user-centric desings and efficient<br /> coding, we create products (Websites, Apps and <br /> more) that drive undeniable success</p>
        </div>

        <div className="phone:hidden mt-[0.5rem] desktop:mt-[-0.5rem]">
            <p className="text-[0.62rem] desktop:text-[0.9rem] font-Hind text-center text-[#FFFFFF] w-[17.7rem] tablet:w-[25rem] desktop:w-[36rem] m-auto">With unwavering commitment to user centric designs and mastery of efficient coding, we create digital solutions ( Websites, Apps and more ) that are catalyst for undeniable success</p>
        </div>
        
        <button className="font-Hind font-medium text-[1.8rem] tablet:text-[1.4rem] desktop:text-[2.2rem] text-[#FFFFFF] bg-[#474A8C] phone:px-[4.9rem] tablet:px-[2.2rem] laptop:px-[3.6rem] desktop:px-[3.6rem] pt-[0.6rem] tablet:pt-[0.3rem] pb-[0.1rem] block mx-auto mt-[3.2rem] tablet:mt-[1.8rem] laptop:mt-[1.8rem] phone:rounded-[1.3rem] tablet:rounded-[2rem] laptop:rounded-[1.2rem] desktop:rounded-[1.6rem]">Let's Talk</button>

        <div className="phone:hidden ipad:block">
            <img className="w-[8rem] laptop:w-[14rem] desktop:w-[16rem] absolute left-0 bottom-[0rem]" src="landingComponentGraphics/ipad-left-graphic.png"></img>
            <img className="w-[8rem] laptop:w-[14rem] desktop:w-[16rem] absolute right-0 bottom-[0rem]" src="landingComponentGraphics/ipad-right-graphic.png"></img>
        </div>
    </section>
    </>
}

export default WelcomeScreen;