function WorkCard(props) {
    
    return (
        <>
            <div className="px-[0.8rem] border-[3px] border-[#7177EB] bg-black rounded-[1rem] h-[16rem] w-[16rem]">
                <img src={props.symbolSrc} className="w-[4rem] pt-[1rem]" />
                <h2 className="text-[#ffffff] text-[1.3rem] font-bold pt-[0.6rem]">{props.title}</h2>
                <p className="text-[#ffffff] text-[0.8rem] pt-[0.6rem]">{props.description}</p>
            </div>
        </>
    )
}

export default WorkCard;