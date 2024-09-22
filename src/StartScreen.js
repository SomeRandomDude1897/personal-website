import "./StartScreen.css"
import React, { useState } from 'react';
import IvanSkyImage from "./pictures/nebo-background.jpg"


const StartScreen = (props) => {
    const [fade, SetFade] = useState(false);
    return ( 
        <div className='start-screen'>
            <img 
            alt="картинка меня" 
            src={IvanSkyImage} 
            className={"main-image " + (fade ? "fade-in" : "fade-out")}
            onLoad={() => {SetFade(true)}}>
            </img>
            <div className="buttons-container">
                <button
                 onClick={props.AboutScroll}
                 className={"action-button " + (fade ? "fade-in" : "fade-out")} 
                 style={{ top: '20%', left: '15%' }}> Обо мне </button>
                <button 
                onClick={props.SkillsScroll}
                className={"action-button " + (fade ? "fade-in" : "fade-out")} 
                style={{ top: '40%', left: '15%' }}> Навыки </button>
                <button 
                onClick={props.ContactsScroll}
                className={"action-button " + (fade ? "fade-in" : "fade-out")} 
                style={{ top: '60%', left: '15%' }}> Контакты </button>
            </div>
        </div>
     );
}
 
export default StartScreen;