function Form() {
    return(
        <>
            <section className="bg-white w-[17rem] mx-auto px-[0.4rem]">
                <h1 className="text-[1.8rem] font-bold text-[#474A8C] mt-[1.7rem]">Let us solve your challenges</h1>
                <p className="text-[0.8rem] mt-[0.8rem] mb-[1.2rem]">Please fill out the form below and we’ll get back to you in <span className="text-[#474A8C] font-bold">1-2 Business Days</span></p>

                <form>
                    <label className="font-bold text-[1rem]">Full Name</label>
                    <br />
                    <input type="text" placeholder="Joe Smith" className="border-black border-[1px] w-[16rem] h-[2rem] pl-[0.5rem] mt-[0.4rem] mb-[0.6rem]"></input>
                    <br />

                    <div className="h-[1.5rem]" />
                
                    <label className="font-bold text-[1rem]">Email</label>
                    <br />
                    <input type="email" placeholder="example@gmail.com" className="border-black border-[1px] w-[16rem] h-[2rem] pl-[0.5rem] mt-[0.4rem] mb-[0.6rem]"></input>
                    <br />
                    
                    <label className="font-bold text-[1rem]">Phone</label>
                    <br />
                    <input type="tel" placeholder="(xxx) xxx - xxxx" className="border-black border-[1px] w-[16rem] h-[2rem] pl-[0.5rem] mt-[0.4rem] mb-[0.6rem]"></input>
                    <br />

                    <div className="h-[1.5rem]" />
                    
                    <label className="font-bold text-[1.3rem]">I need help with ...</label>
                    <br />
                    <textarea placeholder="I was looking to get a website for my company. I would be needing a checkout system ..." className="border-black border-[1px] w-[16rem] h-[9rem] pl-[0.5rem] pt-[0.5rem] mt-[0.7rem]"></textarea>

                    <br />
                    <input type="submit" value="Submit" className="font-Hind font-semibold text-[1.5rem] tablet:text-[1.4rem] desktop:text-[2.2rem] text-[#FFFFFF] bg-[#474A8C] phone:px-[6rem] tablet:px-[2.2rem] laptop:px-[3.6rem] desktop:px-[3.6rem] pt-[0.6rem] tablet:pt-[0.3rem] pb-[0.1rem] block mx-auto mt-[3.2rem] tablet:mt-[1.8rem] laptop:mt-[1.8rem] phone:rounded-[0.9rem] tablet:rounded-[2rem] laptop:rounded-[1.2rem] desktop:rounded-[1.6rem] mt-[1.7rem]"></input>
                </form>

                <div className="h-[4rem]" />
            </section>
        </>
    )

}

export default Form;