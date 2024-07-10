import React from "react";
import '../App.css';

import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
function Side(){
    return(
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                     Admin Job Portal Dashboard
                </div>

            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="">
                        <BsGrid1X2Fill className="icon"/> Dashboard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="">
                        <BsPeopleFill className="icon"/> Users
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGrid3X3GapFill className="icon"/> Applications
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="">
                        <BsListCheck className="icon"/> Chat 
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="">
                        <BsMenuButtonWideFill className="icon"/> Posts
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGearFill className="icon"/> Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Side;