import React from 'react';

import Particles from 'react-particles-js';

function Background(props) {

    //Dark teme settings for particles object
    let particlesDark = {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 3000
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "direction": "right",
                "speed": 0.4,
                "straight": true,
                "bounce": false,
                "out_mode": "out"
            },
            "size": {
                "value": 1.5
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "speed": 0.25,
                    "opacity_min": 0.05
                }
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": false
                }
            },
        },
        "retina_detect": true
    }

    //Light theme settings for particle object
    let particlesLight = {
        "particles": {
            "number": {
                "value": 5,
                "density": {
                    "enable": true,
                    "value_area": 3000
                }
            },    
            "color": {
                "value": "#383838"
              },
            "line_linked": {
                "enable": true,
                "opacity": 1,
                "color": "#383838",
                "width": 1,
                "distance": 3000,
            },
            "move": {
                "direction": "none",
                "speed": 4,
                "random": true,
                "bounce": true
            },
            "size": {
                "value": 1
            },
            "opacity": {
                "anim": {
                    "enable": false
                }
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": false
                }
            },
        },
        "retina_detect": true
    }

    let particles = null;

    //Assign settins to particle variable based on props theme
    if (props.theme === 'dark') {
        particles = particlesDark
    }else {
        particles = particlesLight
    }

    return(
        <Particles params={particles} />
    )
}

export default Background;