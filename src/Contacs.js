import { useState } from "react"
import PointPhoto from "./pictures/pointing-image.png"
import GithubImage from "./pictures/github.png"
import TelegramImage from "./pictures/telegram.png"
import EmailImage from "./pictures/at_sign.png"

const Contacts = (props) => {
    const [copiedText, SetCopiedText] = useState(false);
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        SetCopiedText(true);
        setTimeout(() => {SetCopiedText(false)}, 1000)
    }
    const goToURL = (path) => {
        window.location.href = path;
      };

    return ( 
        <div>
            <div ref={props.Reference} className="contacts-box">
                <div className="headed-list">
                    <div className="content-capital-text">Как со мной связаться</div>
                    <br/>
                    <br/>
                    <div id="contacts-container">
                        <img onClick={() => {copyToClipboard("sokhanivan@yandex.ru")}} src={EmailImage} alt="моя почта" className="contacts-icon"></img>
                        <img onClick={() => {goToURL("https://t.me/LeCirno")}} src={TelegramImage} alt="мой телеграм" className="contacts-icon" ></img>
                        <img onClick={() => {goToURL("https://github.com/SomeRandomDude1897")}} src={GithubImage} alt="мой гитхаб" className="contacts-icon"></img>
                    </div>
                    <br/>
                    <br/>
                    <div className={"content-text " + (copiedText ? "fade-in" : "fade-out")} id="text-copied-popup">Email скопирован в буфер обмена</div>
                </div>
                <img className="contacts-pic" 
                style={{marginLeft: "10%", marginTop: "10%"}} src = {PointPhoto} alt = "здесь фотка меня показывающего налево"></img>
            </div>
        </div>

     );
}
 
export default Contacts;