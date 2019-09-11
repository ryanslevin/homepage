import React from 'react';

import Particles from 'react-particles-js';

function Background(props) {

    let particlesDark = {
        "particles": {
            "number": {
                "value": 60,
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
                "speed": 0.25,
                "bounce": false
            },
            "size": {
                "value": 1
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

    let particlesLight = {
        "particles": {
            "number": {
                "value": 2,
                "density": {
                    "enable": true,
                    "value_area": 1500
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
                "distance": 1800,
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