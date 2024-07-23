function About() {
    return(
        <>
            <section className="bg-[#424585] text-white pt-[2.4rem] pb-[7rem]">    
                
                <div className="w-[16rem] mx-auto">            
                    <h4 className="text-[1.2rem] font-Hind font-bold mb-[0.9rem]">Stay Connected</h4>
                
                    <div className="flex flex-row font-Hind align-center gap-[0.5rem] mb-[0.7rem]">
                        <img src="About/phone.png" className="w-[1.5rem] object-contain"/>
                        <span className="text-[1.15rem]">(512) 222-9820</span>
                    </div>

                    <div className="flex flex-row font-Hind align-center gap-[0.5rem]">
                        <img src="About/email.png" className="w-[1.5rem] object-contain"/>
                        <span className="text-[1.15rem]">splitsphereofficial@gmail.com</span>
                    </div>
                </div>


                <div className="flex flex-row justify-center gap-[5rem] mt-[3rem]">
                    <img src="About/linkedin.png" className="w-[2rem]"/>
                    <img src="About/instagram.png" className="w-[2rem]"/>
                    <img src="About/twitter.png" className="w-[2rem] object-contain"/>
                </div>
            </section>
        </>
    )
}

export default About;