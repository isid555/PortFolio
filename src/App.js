import logo from './logo.svg';
import './App.css';
import Navbar from "./Tags/Navbar";
import Main from "./Tags/Main";
import Skill from "./Tags/Skill";
import Language from "./Tags/Language";
import Education from "./Education";

import Contact from "./Contact";
import End from "./End";
import Tile from "./Components/Tile";
import Projects from "./Projects";
import Calendar from "./Calendar";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  return(
      <div className="App">
        <Navbar></Navbar>
        <Main></Main>
        <Skill id = {"s"}></Skill>
        <Language></Language>

        <Education></Education>
    <Calendar></Calendar>

        <Contact></Contact>


        <End></End>

      </div>
  )
}

export default App;
