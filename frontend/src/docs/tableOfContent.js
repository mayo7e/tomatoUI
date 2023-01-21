
import "./doc.css"

import React from "react"


export default function TableOfContent (){
    const  [headings, setHeadings]= React.useState([])

            React.useEffect(()=>{
                const elements =   Array.from(document.querySelectorAll("h2, h3"))
                .map(elem=>({
                    id: elem.id,
                    text: elem.innerText,
                    level: Number(elem.nodeName.charAt(1))
                }))
                setHeadings(elements)

            }, [])
        return (
            <div>
                <nav>
                    <ul className="toc">
                        {headings.map(heading=>(
                           <li
                           key={heading.id}
                           className={getClassName(heading.level)}
                           >
                                  <a
                                    href={`#${heading.id}`}
                                    onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector(`#${heading.id}`).scrollIntoView({
                                        behavior: "smooth"
                                    })}}
                                >{heading.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        )
}


const getClassName = (level) => {
    switch (level) {
      case 2:
        return 'head2'
      case 3:
        return 'head3'
      case 4:
        return 'head4'
      default:
        return null
    }
  }