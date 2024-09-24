import "./index.css"
import StartScreen from './StartScreen';
import About from './About';
import { useRef, useState } from 'react';
import Skills from "./Skills";
import Contacts from "./Contacs";

function App() {
  const [fade, SetFade] = useState(false);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"});
  }
  return (
    <div>
      <div id="text-for-mobiles">Мобильная версия сайта в разработке</div>
      <div
      onLoad={() => {SetFade(true)}}
      className={"app " + (fade ? "fade-in" : "fade-out")}>
        <StartScreen
        fade={fade}
        ContactsScroll={() => {scrollTo(contactsRef)}} AboutScroll={() => {scrollTo(aboutRef)}} SkillsScroll={() => {scrollTo(skillsRef)}}></StartScreen>
        <About Reference={aboutRef}></About>
        <Skills Reference={skillsRef}></Skills>
        <Contacts Reference={contactsRef}></Contacts>
      </div>
    </div>
  );
}

export default App;
