const ToolCard = (props) => {
    return (
        <div className="rounded-xl w-60 flex items-center justify-center flex-col overflow-hidden" style={{boxShadow: "0 5px 10px #00000055"}}>
            <img src={props.image} alt={props.name} />
            <div className="p-3 w-full">
                <h1 className="text-xl font-medium">{props.name}</h1>
                <h2>{props.category}</h2>
                <h3 style={{color: "#777"}}>سنة: {props.year}</h3>
                <h3 style={{color: "#777"}}>ساعات: {props.hours}</h3>
                <h3 style={{color: "#777"}}>السعر: {props.price}</h3>
            </div>
        </div>
    )
}

export default ToolCard;