import "./Tile.css"

function Tile({img,heading,description}) {
    return(
        <div className={"tile"}>

            <img src={img}  className={"img"}/>

            <h3 className={"heading"}>{heading}</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default Tile;