/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        // "value": 80, // Original Setting - How many particles we want displayed
        "value": 5,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        // "type": "circle", // Original Setting - Shape
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          // "nb_sides": 5 // Original Setting - How many sides the shape
          "nb_sides": 6 
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        // "value": 0.5, // Original - The transparency of the shape
        "value": 0.2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        // "value": 5, // Original - the size of the shapes
        "value": 80,
        // "random": true, // Original - shapes will move randomly
        "random": false,
        "anim": {
          // "enable": false, // Original - Shapes will be animated. Shrink and expand
          "enable": true, 
          // "speed": 40, // Original - Speed of the animation.
          "speed": 20,
          // "size_min": 0.1, // original - The minimum size of the shape
          "size_min": 30,
          "sync": false
        }
      },
      "line_linked": {
        // "enable": true, // Original - It will show shapes linked to other shapes
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          // "enable": true, // Original - it will move shapes when hovering
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          // "enable": true, // Original - it will move shapen when clicked
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);