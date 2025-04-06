document.addEventListener("DOMContentLoaded", () => {
  // Apply staggered animations to link cards
  const linkCards = document.querySelectorAll(".link-card");
  linkCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 + index * 100);
  });

  // Apply staggered animations to service items
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";

    setTimeout(() => {
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 600 + index * 100); // Start after link cards animation
  });

  // Particle background effect
  createParticles();

  // Add hover sound effect for links (subtle)
  linkCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      playSoftSound();
    });

    // Add click animation
    card.addEventListener("click", (e) => {
      // Create ripple effect
      createRippleEffect(e, card);
    });
  });
});

// Function to create a subtle ripple effect on click
function createRippleEffect(event, element) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.className = "ripple";

  // Remove existing ripples
  const currentRipples = element.querySelectorAll(".ripple");
  currentRipples.forEach((r) => r.remove());

  element.appendChild(ripple);

  // Clean up
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Function to create floating particles in the background
function createParticles() {
  const container = document.querySelector(".container");
  const particlesContainer = document.createElement("div");
  particlesContainer.className = "particles-container";

  // Insert before the first child of container
  container.insertBefore(particlesContainer, container.firstChild);

  // Add CSS for particles container
  particlesContainer.style.position = "absolute";
  particlesContainer.style.top = "0";
  particlesContainer.style.left = "0";
  particlesContainer.style.width = "100%";
  particlesContainer.style.height = "100%";
  particlesContainer.style.overflow = "hidden";
  particlesContainer.style.pointerEvents = "none";
  particlesContainer.style.zIndex = "-1";

  // Create particles
  for (let i = 0; i < 30; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement("div");

  // Random size between 5px and 15px
  const size = Math.random() * 10 + 5;

  // Random position
  const xPos = Math.random() * 100;
  const yPos = Math.random() * 100;

  // Random duration between 20s and 40s
  const duration = Math.random() * 20 + 20;

  // Random delay
  const delay = Math.random() * 5;

  // Style the particle
  particle.style.position = "absolute";
  particle.style.top = `${yPos}%`;
  particle.style.left = `${xPos}%`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.borderRadius = "50%";
  particle.style.background =
    "linear-gradient(135deg, rgba(156, 39, 176, 0.3), rgba(208, 92, 227, 0.1))";
  particle.style.boxShadow = "0 0 10px rgba(156, 39, 176, 0.2)";
  particle.style.animation = `floatParticle ${duration}s linear ${delay}s infinite`;

  // Add CSS animation for floating
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: ${Math.random() * 0.5 + 0.1};
            }
            25% {
                transform: translate(${Math.random() * 100 - 50}px, ${
    Math.random() * 100 - 50
  }px) rotate(90deg);
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${
    Math.random() * 100 - 50
  }px) rotate(180deg);
            }
            75% {
                transform: translate(${Math.random() * 100 - 50}px, ${
    Math.random() * 100 - 50
  }px) rotate(270deg);
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
                opacity: ${Math.random() * 0.5 + 0.1};
            }
        }
    `;
  document.head.appendChild(style);

  container.appendChild(particle);
}

// Function to play a soft sound on hover (will only work with user interaction)
function playSoftSound() {
  // Not implementing actual sound to prevent annoyance
  // This would require actual audio files and user interaction to work properly
  // due to browser autoplay policies
  // For demonstration only - would be implemented like this:
  /*
    const sound = new Audio('hover-sound.mp3');
    sound.volume = 0.2;
    sound.play().catch(e => console.log('Audio play prevented:', e));
    */
}

// Add a CSS class for ripple effect
const style = document.createElement("style");
style.innerHTML = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 2;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add support for dark mode toggle
function setupDarkModeToggle() {
  // We can add this feature later if needed
  // This would adjust the CSS variables based on user preference
}

// Update copyright year automatically
const footerYear = document.querySelector("footer p");
if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = footerYear.textContent.replace("2023", currentYear);
}
