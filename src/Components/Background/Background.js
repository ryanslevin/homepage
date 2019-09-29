import React from 'react';

import './Background.css'

import Particles from 'react-particles-js';
import { isMobile } from 'react-device-detect';

function Background(props) {

    //Dark theme settings for particles object
    let particlesDark = {
        "particles": {
            "number": {
                "value": 50
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
            },
            "shape": {
                "type": "circle"
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": false
                },
                "resize": true
            },
        },
        "retina_detect": true
    }

    //Light theme settings for particle object
    let particlesLight = {
        "particles": {
            "number": {
                "value": 5
            },
            "color": {
                "value": "#383838"
            },
            "line_linked": {
                "enable": true,
                "opacity": .75,
                "color": "#383838",
                "width": 1,
                "distance": 3000,
            },
            "move": {
                "direction": "none",
                "speed": 4,
                "random": true,
                "bounce": true,
                "out_mode": "bounce"
            },
            "size": {
                "value": .25
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
                },
                "resize": true
            },
        },
        "retina_detect": true
    }


    //Adjust particle settings for mobile, reduces particle #, size and speed.
    if (isMobile) {
        particlesDark = {
            "particles": {
                "number": {
                    "value": 25
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "direction": "right",
                    "speed": 0.2,
                    "straight": true,
                    "bounce": false,
                    "out_mode": "out"
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
                },
                "shape": {
                    "type": "circle"
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
            },
            "retina_detect": true
        }

        particlesLight = {
            "particles": {
                "number": {
                    "value": 4
                },
                "color": {
                    "value": "#383838"
                },
                "line_linked": {
                    "enable": true,
                    "opacity": .5,
                    "color": "#383838",
                    "width": .5,
                    "distance": 3000,
                },
                "move": {
                    "direction": "none",
                    "speed": 2,
                    "random": true,
                    "bounce": true,
                    "out_mode": "bounce"
                },
                "size": {
                    "value": .1
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
                    },
                    "resize": true
                },
            },
            "retina_detect": true
        }
    }

    let particles = null;

    //Assign settins to particle variable based on props theme
    if (props.theme === 'dark') {
        particles = particlesDark
    } else {
        particles = particlesLight
    }
    return (
        <Particles params={particles} className='particle' />
    )
}

export default Background;