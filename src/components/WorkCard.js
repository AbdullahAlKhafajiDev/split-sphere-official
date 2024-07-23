function WorkCard(props) {
    
    return (
        <>
            <div className="px-[0.8rem] border-[3px] border-[#7177EB] bg-black rounded-[1rem] h-[75vw] w-[80vw]">
                <img src={props.symbolSrc} className="w-[17vw] pt-[1rem]" />
                <h2 className="text-[#ffffff] text-[6.5vw] font-bold pt-[0.6rem]">{props.title}</h2>
                <p className="text-[#ffffff] text-[4vw] pt-[0.6rem]">{props.description}</p>
            </div>
        </>
    )
}

export default WorkCard;