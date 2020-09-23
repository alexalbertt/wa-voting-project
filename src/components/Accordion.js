import React, {useState, useRef} from "react"
import CandidateIcon from "./CandidateIcon";
import "./accordion.scss";
import {BiChevronDownCircle, BiChevronUpCircle} from "react-icons/bi";
import { IconContext } from "react-icons";


export default function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setVisible, setVisibleState] = useState("none");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleActive() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setVisibleState(setActive === "active" ? "none" : "inline");
    }
    return (
        <div className="accordion-section">
            <button className={`accordion-button ${setActive}`} onClick={toggleActive}>
                <div className="centerBtn">
                <p className={`accordion-title ${setActive}`}>{props.title}</p>
                <IconContext.Provider value={{className:`accordion-icon ${setActive}`, size: '2rem'}}>
                    {setActive ? <BiChevronUpCircle/> : <BiChevronDownCircle/>}
                </IconContext.Provider>
                </div>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`, display: setVisible}} className={`accordion-content`}>
                <div className="accordion-text">
                    {props.content.map((candidate) => (
                        <CandidateIcon candidate={candidate} allContentfulCandidate={props.allContentfulCandidate}/>
                    ))}
                </div>
            </div>
        </div>
    );
}