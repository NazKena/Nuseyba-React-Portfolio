import React, { useState } from "react";
import NoteTakerImg from "../img/Screenshot 2023-03-07 at 19.52.44.png"

function Projects () {

const [developers] = useState ([
    {
        image:{NoteTakerImg},
        name: NoteTaker,
        application:"https://herokus-note-taker.herokuapp.com/",
        github: "https://github.com/NazKena/Note_Taker",
    }
]
) 

return (

    <div>
    <h2>Creative Work</h2>
    <p>Here I will inclde both my services as well as outlets that serve to showcase my creative skills.</p>  
    <img src="./"></img>
 </div>

);
};

export default Projects;