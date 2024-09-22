import { useState } from "react"
import PointPhoto from "./pictures/pointing-image.png"

const Contacts = (props) => {
    const [copiedText, SetCopiedText] = useState(false);
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        SetCopiedText(true);
        setTimeout(() => {SetCopiedText(false)}, 1000)
    }
    return ( 
        <div>
            <div ref={props.Reference} className="contacts-box">
                <div className="headed-list">
                    <div className="content-capital-text">Как со мной связаться</div>
                    <ul style={{listStyleType: 'none'}}>
                        <br/>
                        <li> 
                            <div className="content-text">Email:</div>
                            <button onClick={() => {copyToClipboard("sokhanivan@yandex.ru")}} className="content-copyable content-text">sokhanivan@yandex.ru</button>
                        </li>
                        <li> 
                            <div className="content-text">Telegram:</div>
                            <a href="https://t.me/LeCirno" className="content-copyable content-text">@LeCirno</a>
                        </li>
                        <li> 
                        <div className="content-text">Github:</div>
                        <a href="https://github.com/SomeRandomDude1897" className="content-copyable content-text">https://github.com/SomeRandomDude1897</a>
                        </li>
                        <li> 
                            <div className="content-text">Телефон:</div>
                            <button onClick={() => {copyToClipboard("+79509955770")}} className="content-copyable content-text">+79509955770</button>
                        </li>
                        <br/>
                        <br/>
                        <div className={"content-text " + (copiedText ? "fade-in" : "fade-out")} id="text-copied-popup">Текст скопирован в буфер обмена</div>
                    </ul>
                </div>
                <img className="contacts-pic" 
                style={{marginLeft: "10%", marginTop: "10%"}} src = {PointPhoto} alt = "здесь фотка меня показывающего налево"></img>
            </div>
        </div>

     );
}
 
export default Contacts;