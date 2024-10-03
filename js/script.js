window.onload = function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 150, // Maximum number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "repulse": {
                    "distance": 100
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
}


// Function to animate the number count automatically
function animateCounts() {
    document.querySelectorAll('.stat-value').forEach(countElement => {
      const targetCount = parseInt(countElement.getAttribute('data-count'));
      let currentCount = 0;
      const increment = Math.ceil(targetCount / 100); // Increment value

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount; // Set to target if exceeded
          clearInterval(interval);
        }
        countElement.textContent = currentCount; // Update displayed value
      }, 20); // Interval time
    });
  }

  // Start counting once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    animateCounts();
  });


  

