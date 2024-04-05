import React from "react";
import {BrowserRouter, NavLink, Route, Outlet} from 'react-router-dom'
import '/src/navlink.css'

export default function Root() {
    return(<>
            <nav className="nav">
                <a href ="/About" className="menu"
                    activeClassName= "active_menu"
                    activeStyle={{fontWeight:'bold'}}
                    exact={true}> About
                </a>
                <a href ="/Job" className="menu"
                    activeClassName= "active_menu"> Job
                </a>
                <a href ="/Portfolio" className="menu"
                    activeClassName= "active_menu"> Portfolio
                </a>
                <a href ="/Skill" className="menu"
                    activeClassName= "active_menu"> Skill
                </a>           
            </nav>
        <div id="detail"> 
            <Outlet />
        </div>
        </>
        )
        }
