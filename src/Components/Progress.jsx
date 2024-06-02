import './Progress.css';
import {useState} from "react";
import {useEffect} from "react";
function Progress({ percentage , duration , text }) {

    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const interval = setInterval(()=>{
            setProgress((prev)=> {
                if(prev<percentage){
                    prev+=1;
                }
                else{
                    clearInterval(interval);
                    return percentage;
                }
            })
        } , duration)

        return()=> clearInterval(interval)


    },[duration]);






    return (


        <div className={"progress-bar-1"}>
            <div className="progress-bar-2" style={{width: `${progress}%`}}>

            </div>

        </div>


    );
}

export default Progress;