import React from "react"
import face from "../assets/face.png"
export function About(){
    return (
        <div id="About">
            <img
                src={face}
                alt="nsu"
                height="200px"
            />
            <h1>About Me</h1> 

            <p>Hi! My name's Christopher, and I'm currently a student studying Machine Learning and Computer Vision at USC. With a passion for tinkering, research is where I find the most fun in code. When I'm not glued to the computer screen, in my free time I enjoy violin, tennis, and going to support Nikkei Student Union meetings. Feel free to take a look at my research and experience below!</p>     
        </div>
    )
}