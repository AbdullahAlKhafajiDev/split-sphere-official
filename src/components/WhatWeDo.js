import WorkCard from "./WorkCard";

function WhatWeDo(){
    return (
        <>
            <section>
                <span className="text-white text-[8vw] font-bold block mt-[2rem] mb-[1.9rem] w-[85vw] mx-auto pl-[0.8rem]">What We Do</span>
                <div className="flex justify-center flex-wrap gap-[8vw]">
                    <WorkCard symbolSrc="WhatWeDoSymbols/consulting.png" title="Consulting" description="We conduct market trend analysis to uncover potential product shortcomings and guide you with  insights that helps you move in the right direction for optimal success." />
                    <WorkCard symbolSrc="WhatWeDoSymbols/design.png" title="Design" description="We design well-researched products  that are not only easy to use, but also ensures broad market reach and higher revenue potential." />
                    <WorkCard symbolSrc="WhatWeDoSymbols/development.png" title="Development" description="We streamline your operations with bespoke software solutions, boosting efficiency and profitability across all platforms, while safeguarding your assets with robust security measures." />
                </div>

            </section>
        </>
    )
}

export default WhatWeDo;