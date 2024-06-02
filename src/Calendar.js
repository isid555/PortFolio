import Projects from "./Projects";
import "./Calendar.css"
function Calendar(){
    return (


        <div className={"cal"}>
            <h2>Projects</h2>


            <div className={"calendar"}>
                <Projects
                    dis={"https://i.guim.co.uk/img/media/077e29dbbeb58b4965f9eae69e18de09adf21afe/0_0_431_431/master/431.jpg?width=465&dpr=1&s=none"}
                    text={"Sudoku Solver using Java"}
                />

                <Projects
                    dis={"https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/05/web_crawler_header.jpg"}
                    text={"Web Crawler using Python"}/>
                <Projects
                    dis={"https://static.chasecdn.com/content/services/structured-image/image.desktopLarge.jpg/articles/thumbnail-image-large/how-does-the-stock-market-work-2560x1440.jpg"}
                    text={"Stock Market Analysis"}/>
                <Projects
                    dis={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"}
                    text={"TicTacToe using Java"}/>
                <Projects dis={"https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"}
                          text={"10 SpringBoot API Projects"}/>
                <Projects
                    dis={"https://cdn.logojoy.com/wp-content/uploads/20231129102622/artificial-intelligence-logo-3.webp"}
                    text={"AI Speech_Recognition Project"}/>

            </div>

        </div>
    )
}

export default Calendar