import "./Education.css"

function Education() {
    return(
        <div class="education">
            <div className="edu_para">
                <h1 style={{textDecoration : "underline" ,fontFamily :"Agency FB" , fontSize:"45px"}}>My Education</h1>
                <div className="degree-container">
                    <div className="degree">
                        <h2>Bachelor's Degree</h2>
                        <p>BITS PILANI ,BSc in Computer Science(2023-2026)</p>
                    </div>
                    <div className="degree">
                        <h2>Scaler School of Technology</h2>
                        <p>UG in Computer Science(2023-2027)</p>
                    </div>
                </div>
            </div>


            <div className="edu_img">
                <img src="https://cdn.dribbble.com/users/2221077/screenshots/14110896/media/f6bd29562775b724409df2c851c5b49c.gif" alt=""/>
            </div>

        </div>
    )
}

export default Education;