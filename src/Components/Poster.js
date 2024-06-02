import Tile from "./Tile";
import "./Poster.css"
function Poster(){
    return(
        <div className={"poster"}>


            <div className="item">
                <Tile

                    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s"}
                    heading={"HTML5"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"}
                    heading={"CSS"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"}
                    heading={"Javascript"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"}
                    heading={"React"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"}
                    heading={"Python"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"}
                    heading={"Java"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"}
                    heading={"MongoDB"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://logowik.com/content/uploads/images/mysql8604.logowik.com.webp"}
                    heading={"MySQL"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://img.icons8.com/color/480w/spring-logo.png"}
                    heading={"Spring Boot"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://1000logos.net/wp-content/uploads/2017/03/Linux-logo.jpg"}
                    heading={"Linux"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"}
                    heading={"Git"}

                />
            </div>
            <div className="item">
                <Tile

                    img={"https://www.docker.com/wp-content/uploads/2023/08/logo-dont-stretch.svg"}
                    heading={"Docker"}

                />
            </div>


        </div>
    )
}

export default Poster