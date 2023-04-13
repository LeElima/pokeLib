import React, { useState } from "react";

import AbaStatus from "./AbaStatus";
import AbaMoves from "./AbaMoves";

import './TabBarNav.css'

const TabBarNav = (infos) =>{
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };

    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    return(
        <div className="Tabs">
            <ul className="nav">
                <li 
                    className={activeTab === "tab1" ? "active" : ""}
                    onClick={handleTab1}
                >
                    Stats
                </li>
                <li 
                    className={activeTab === "tab2" ? "active" : ""}
                    onClick={handleTab2}
                >
                    Moves
                </li>
            </ul>
            <div className="outlet">
            {activeTab === "tab1" ? <AbaStatus key={1} status={infos.infos.stats}/> : <AbaMoves key={2} moves={infos.infos.moves}/>}
            </div>
        </div>
        
    )
}
export default TabBarNav;