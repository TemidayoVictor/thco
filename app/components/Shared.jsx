import React, {useEffect, useState} from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Shared = () => {
    const [menuAction, setMenuAction] = useState('false');
    const updateMenu = (newState) => {
        setMenuAction(newState)
    };

    useEffect(() => {
        console.log(menuAction);    
    })

    return (     
        <div>
            <TopNav menuAction={menuAction} updateMenu={updateMenu}></TopNav>   
            <SideNav menuAction={menuAction}></SideNav>
        </div>
    )
}

export default Shared