import "./Skill.css"
import Typing from "../Components/Typing";
import Pbar from "../Components/Pbar";
function Skill() {
    return(

        <div class="skill">

            <div className="skill_para">
                <h2>About</h2>
                <span>
                    I am a passionate Web Designer and Developer with expertise in crafting visually stunning, user-friendly
                websites.
                </span>
                <span>
                    As a Backend Developer, I excel in creating robust, scalable systems with a focus on security
                and efficiency.
                </span>

                <span>
                    Additionally, I solve Data Structures and Algorithms (DSA) questions in Java and work as
                a Data Analyst, turning data into actionable insights.
                </span>
            </div>

            <div className="skill_img">
                <img src="https://i.pinimg.com/originals/63/7a/4d/637a4d42e1738853b2f96ffbbd60622a.gif" alt=""/>
            </div>

            <div class="skill_measure">
                <h3>Proliferation</h3>

                <Pbar
                    text={"Frontend Design"}
                    percentage={75}
                />
                <Pbar
                text={"Backend Development"}
                percentage={80}
                />
                <Pbar text={"Data Analysis"}
                      percentage={60}/>
                <Pbar text={"AI"}
                      percentage={45}
                      />
            </div>



        </div>
    )
}

export default Skill;