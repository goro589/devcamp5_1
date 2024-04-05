import React from "react";
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import '/src/navlink.css'

function Router() {
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to="/" className="menu"
                    activeClassName= "active_menu"
                    activeStyle={{fontWeight:'bold'}}
                    exact={true}> About
                </NavLink>
                <NavLink to="/Job" className="menu"
                    activeClassName= "active_menu"> Job
                </NavLink>
                <NavLink to="/Portfolio" className="menu"
                    activeClassName= "active_menu"> Portfolio
                </NavLink>
                <NavLink to="/Skill" className="menu"
                    activeClassName= "active_menu"> Skill
                </NavLink>           
            </nav>
          
        </BrowserRouter>
    )
}

export default Router