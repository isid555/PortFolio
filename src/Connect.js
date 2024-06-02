import "./Connect.css"
function Connect({img,link,text}){
    return(
        <div className={"connect"}>

            <div className="ct_img">
                <img src={img} alt="" />
            </div>
            <div className="ct_text">
                <a href={link} target={"_blank"}>{text}</a>
            </div>



        </div>
    )
}
export default Connect