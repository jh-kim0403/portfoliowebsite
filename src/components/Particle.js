import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";
import './Particle.css';

function Particle({id, color}) {//ADD the parameter true/false then in the background color load if true unload if untrue
    const [init, setInit] = useState(false);
    const canvasColor = color ? "#050713" : "transparent";
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            {init && (
                <Particles
                    id={id}   
                    className="tsparticles"
                    init={initParticlesEngine}
                    loaded={particlesLoaded}
                    options={{
                        background: { color: { value: canvasColor } },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                //onHover: { enable: false, mode: "repulse" },
                                resize: true,
                            },
                            modes: {
                                push: { quantity: 4 },
                                //repulse: { distance: 200, duration: 0.4 },
                            },
                        },
                        particles: {
                            color: { value: "#FFFFFF" },
                            move: {
                                direction: "none",
                                enable: true,
                                //outModes: { default: "out" },
                                random: false,
                                speed: .1,
                                straight: false,
                            },
                            number: { density: { enable: true, area: 800 }, value: 80 },
                            opacity: {
                                animation: {
                                    enable: true,
                                    speed: 0.05,
                                    sync: true,
                                    startValue: "max",
                                    count: 1,
                                    //destroy: "min"
                                },
                                value: {
                                    min: 0.5,
                                    max: 1.5
                                }
                            },
                            shape: { type: "star" },
                            size: { value: 1}//{ min: 1, max: 2 } },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
} export default Particle;
