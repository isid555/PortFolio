import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import Skill from "./Skill";
import Language from "./Language";
import Education from "./Education";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import End from "./End";

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
        <Skill></Skill>
        <Language></Language>
        <Education></Education>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <End></End>
      </div>
  )
}

export default App;
