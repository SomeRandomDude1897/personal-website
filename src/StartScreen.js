import "./StartScreen.css"
import IvanSkyImage from "./pictures/nebo-background.jpg"


const StartScreen = (props) => {
    return ( 
        <div className='start-screen'>
            <img 
            alt="картинка меня" 
            src={IvanSkyImage} 
            className={"main-image"}
            >
            </img>
            <div className="buttons-container">
                <button
                 onClick={props.AboutScroll}
                 className={"action-button " + (props.fade ? "fade-in" : "fade-out")} 
                 style={{ top: '20%', left: '15%' }}> Обо мне </button>
                <button 
                onClick={props.SkillsScroll}
                className={"action-button " + (props.fade ? "fade-in" : "fade-out")} 
                style={{ top: '40%', left: '15%' }}> Навыки </button>
                <button 
                onClick={props.ContactsScroll}
                className={"action-button " + (props.fade ? "fade-in" : "fade-out")} 
                style={{ top: '60%', left: '15%' }}> Контакты </button>
            </div>
        </div>
     );
}
 
export default StartScreen;