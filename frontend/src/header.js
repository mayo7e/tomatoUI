import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import {Link} from "react-router-dom"
import LoginButton from "./components/buttons/login-button.js"
import LogoutButton from "./components/buttons/logout-button.js"
import SignupButton from "./components/buttons/signup-button.js"

const Header = () => {
  const { isAuthenticated} = useAuth0();
  return (
    
        
            <header>
                <div className="logo" >
                <Link to="/"><h1><span>tomato</span>UI</h1></Link>
                </div>
                <nav>
                    <ul  className="nav-pg-01">
                      <Link to="/docs/getting-started"><li>Docs</li></Link>  
                        <Link to="/blog"><li>Blog</li></Link>
                        <li>Community</li>
                    </ul>
                

                    <ul  className="nav-pg-02">
                        <li>Github</li>
                        <li>twitter</li>
                    </ul>
                    {!isAuthenticated && (
                      <>
                      <LoginButton />
                      <SignupButton />
                      
                      </>
                    ) }
                    {isAuthenticated && (
                      <>
                        <LogoutButton />
                      </>

                    )}

                </nav>
            </header>

    
  )
}

export default Header
