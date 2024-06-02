import "./Main.css"
import Typing from "../Components/Typing";

function main() {
    return(
        <div class="main">
            <div class="main_img">

                {/*<img src="https://lh5.googleusercontent.com/proxy/EmWkiJZc7hVOW5QaT5ncAhPejQ_0GltI4DaN7Jl4baYGpxowLtqeB-e1GZn4ixwS5iiN6Lw" alt="main_img"></img>*/}
                <img src="https://i.pinimg.com/originals/48/f9/cc/48f9cc76e5e49e04fb9385c65047cde2.gif" alt=""/>
            </div>

            <div class="main_para">

                <h6> HEY THERE ! , WELCOME TO MY PORTFOLIO</h6>
                <h3> I'm <span className={"sid"}>Siddharth</span> ,an active </h3>
                <Typing
                    text={[
                        "Frontend Designer",
                        "Backend Developer",
                        "Data Analyst",
                        "AI Enthusiast"

                    ]}

                    typingSpeed={100}
                    deletingSpeed={50}
                    duration={1000}
                />

                <h5><p>Dive in and discover the magic where creativity meets code. From innovative solutions to creative coding, let's turn ideas into reality together.
                    <br/>Explore, engage, and get inspired!</p></h5>
            </div>
        </div>


    )
}
export default main;