import React from "react";
import Skills from "./Skills.js";
import TempSkills from "./TempSkills.js";
import Particle from "../Particle.js";

function About() {
    return (
        <div>
            <Particle id="particlesDark" color={true} />
            <Skills />
            {/* <TempSkills /> */}
        </div>
    )

}

export default About;