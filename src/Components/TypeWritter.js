import React from "react";
import Typewriter from "typewriter-effect";
function Typewritter()
{
    return(
        <>
            <Typewriter 
                options={{
                    strings: [
                    "Software Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Student",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </>
    );
}
export default Typewritter