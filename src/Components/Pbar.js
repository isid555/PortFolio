import Progress from "./Progress";
import "./Pbar.css"
function Pbar({text , percentage}){
    return(
       <div className={"pbar"}>
           <div className={"text"}>
               {text} - <span>{percentage} %</span>
           </div>
           <Progress
           percentage={percentage}
           />
       </div>
    )
}


export default Pbar