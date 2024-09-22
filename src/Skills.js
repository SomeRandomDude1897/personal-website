import ReactImage from "./pictures/react.png"
import PythonImage from "./pictures/python.png"
import UnityImage from "./pictures/unity.png"
import CSharpImage from "./pictures/csharp.png"
import CPPImage from "./pictures/c++.png"
import CSSImage from "./pictures/css.png"
import HTMLImage from "./pictures/html.png"
import JSImage from "./pictures/JS.png"
import PostgreSQLImage from "./pictures/postgresql.png"
import GitImage from "./pictures/git.png"


const Skills = (props) => {
    return ( 
        <div ref={props.Reference} className="skills-box">
            <div className="headed-list">
                <div className="content-capital-text">Мои основные навыки:</div>
                <ul>
                    <li className="content-text"> React </li>
                    <li className="content-text"> Python </li>
                    <li className="content-text"> Javascript </li>
                    <li className="content-text"> CSS </li>
                    <li className="content-text"> HTML </li>
                    <li className="content-text"> C++ </li>
                    <li className="content-text"> Unity </li>
                    <li className="content-text"> C# </li>
                    <li className="content-text"> PostgreSQL </li>
                    <li className="content-text"> Git </li>
                    <li className="content-text"> Английский язык B2 </li>
                    <li className="content-text"> Немецкий язык B1 </li>
                </ul>
            </div>
            <div className="logo-container">
                <img className="logo-object" src={ReactImage}></img>
                <img className="logo-object" src={PythonImage}></img>
                <img className="logo-object" src={JSImage}></img>
                <img className="logo-object" src={CSSImage}></img>
                <img className="logo-object" src={HTMLImage}></img>
                <img className="logo-object" src={CPPImage}></img>
                <img className="logo-object" src={UnityImage}></img>
                <img className="logo-object" src={CSharpImage}></img>
                <img className="logo-object" src={PostgreSQLImage }></img>
                <img className="logo-object" src={GitImage}></img>
            </div>
        </div>
     );
}
 
export default Skills;