
import "./doc.css"

import React from "react"

export default function TableOfContent (){
    const  [headings, setHeadings]= React.useState([])
            React.useEffect(()=>{
                const elements =   Array.from(document.querySelectorAll("h2, h3"))
                .map(elem=>({
                    text: elem.innerText
                }))
                setHeadings(elements)

            }, [])
                console.log(headings)
        return (
            <div>
                <nav>
                    <ul className="toc">
                        {headings.map(heading=>(
                            <li>
                                <a href="#" >{heading.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        )
}
