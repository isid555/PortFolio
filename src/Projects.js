import "./Project.css"
function Projects({dis, text}){
    return(
        <div className={"project"}>

            {/*<div className="pro_img">*/}

            {/*</div>*/}
            {/*<div className="pro_cont">*/}

            {/*</div>*/}

            <img src={dis} alt=""/>
            <p>
                {text}
            </p>


        </div>
    )
}
export default Projects