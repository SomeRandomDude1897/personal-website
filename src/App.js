import "./App.css"
import StartScreen from './StartScreen';
import About from './About';
import { useRef } from 'react';
import Skills from "./Skills";
import Contacts from "./Contacs";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"});
  }
  return (
    <div className="app-class">
      <StartScreen ContactsScroll={() => {scrollTo(contactsRef)}} AboutScroll={() => {scrollTo(aboutRef)}} SkillsScroll={() => {scrollTo(skillsRef)}}></StartScreen>
      <About Reference={aboutRef}></About>
      <Skills Reference={skillsRef}></Skills>
      <Contacts Reference={contactsRef}></Contacts>
    </div>
  );
}

export default App;
