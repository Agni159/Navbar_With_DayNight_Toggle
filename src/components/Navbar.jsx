import React from "react";
import './Navbar.css' 
// import logo_black from '../../assets/logo-black.png'
// import search_icon_dark from '../../assets/search-b.png'
// import toggle_light from '../../assets/night.png'
// import toggle_dark from '../../assets/day.png'
// // import logo from "@/assets/logo-black.png";



const Navbar=({theme,setTheme})=>{
    const toggle_mode=()=>{
        theme=='light' ? setTheme('dark') :setTheme('light');
    }



    return (
        <div className="navbar">
            <img src={theme=='light'? '/assets/logo-black.png': '/assets/logo-white.png'} alt="Logo" className="logo"/>

            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            <div className="search-box">
                <input type="text"  placeholder="Search"/>
                <img src={theme=='light'? '/assets/search-w.png': '/assets/search-b.png'} alt="" />
            </div>

            <img onClick={toggle_mode} src={theme=='light'? "/assets/night.png": '/assets/day.png'} alt="" className="toggle-icon" />
            {/* <img onClick={toggle_mode} src={theme=='light'? "/assets/night.png": '/assets/day.png'} alt="" className="toggle-icon" /> */}

            {/* <img onClick={()=>{toggle_mode}} src={theme=='light'? "/assets/night.png": '/assets/day.png'} alt="" className="toggle-icon" />  */}

        </div>
    );
};

export default Navbar;