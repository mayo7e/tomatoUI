

import React from "react"
import "./doc.css"
import Toc from "./tableOfContent"


export default function Getting_started (){

    const textParagraph = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham`

        return (
            <div  className="textParagraph">
                <div className="main-text" >
                    <h1>Getting Started</h1>
                    {textParagraph}
                    <p>This page is an overview of the tomatoUI documentation and related resources.<div>tomatoUI is a JavaScript library for building user interface trace and error logs.</div></p>
                    <h2>Try tomatoUI</h2>
                    {textParagraph}
                    <h3>Online Playgrounds</h3>
                    {textParagraph}
                    <h3>Add tomatoUI to a website</h3>
                    {textParagraph}
                    <h3>Step-by-Step Guide</h3>
                    {textParagraph}
                    <h3>Step-by-Step Guide</h3>
                    {textParagraph}
                    <h3>Step-by-Step Guide</h3>
                    {textParagraph}
                    <h3>Step-by-Step Guide</h3>
                    {textParagraph}
                </div>
                

                <Toc />
              

            </div>
        )
}