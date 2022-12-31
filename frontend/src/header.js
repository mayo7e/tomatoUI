
import React from 'react'
import {Link} from "react-router-dom"

const header = () => {
  return (
    
        
            <header>
                <div className="logo" >
                    <h1><span>tomato</span>UI</h1>
                </div>
                <nav>
                    <ul  className="nav-pg-01">
                        <li>Docs</li>
                        <Link target="_blank" to="/blog"><li>Blog</li></Link>
                        <li>Community</li>
                    </ul>
                

                    <ul  className="nav-pg-02">
                        <li>Github</li>
                        <li>twitter</li>
                    </ul>
                </nav>
            </header>

    
  )
}

export default header
