// Navigation scroll effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.9)";
  }
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  // Prevent event propagation
  event.stopPropagation();
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-container") && !e.target.closest(".menu-btn")) {
    navLinks.classList.remove("active");
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Add your form submission logic here
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Intersection Observer for animation
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all service cards and portfolio items
document
  .querySelectorAll(".service-card, .portfolio-item")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
    observer.observe(element);
  });

// Add loading animation to portfolio images
document.querySelectorAll(".portfolio-item img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1";
  });
});

// Add the video modal functionality that was previously inline
document.addEventListener("DOMContentLoaded", function () {
  // Get all video thumbnails
  const videoThumbnails = document.querySelectorAll(".video-thumbnail");
  const modal = document.getElementById("video-modal");
  const playerContainer = document.getElementById("youtube-player-container");
  const closeModal = document.querySelector(".close-modal");

  // Add click event to each thumbnail
  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id");

      // Create iframe only when clicked
      playerContainer.innerHTML = `
        <iframe 
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;

      // Show modal
      modal.style.display = "flex";
    });
  });

  // Close modal when clicking the X
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    // Remove iframe when closing modal
    playerContainer.innerHTML = "";
  });

  // Close modal when clicking outside the content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      playerContainer.innerHTML = "";
    }
  });
});

// Optimize intersection observer by batching DOM updates
const observedElements = document.querySelectorAll(
  ".service-card, .portfolio-item"
);
const observerBatch = new IntersectionObserver(
  (entries) => {
    requestAnimationFrame(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px 100px 0px", // Load elements before they enter viewport
  }
);

// Init the elements for animation
observedElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "all 0.6s ease-out";
  observerBatch.observe(element);
});

// Add lazy loading for background video
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");
  const bgVideo = document.querySelector(".background-video");

  // Check if the user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // If reduced motion is preferred, don't autoplay video
    bgVideo.removeAttribute("autoplay");
    bgVideo.pause();
  }
});

// Automatic workflow animation
document.addEventListener("DOMContentLoaded", function () {
  const workflowSteps = document.querySelectorAll(".workflow-step");
  const visualItems = document.querySelectorAll(".visual-item");
  const timelineProgress = document.querySelector(".timeline-progress");

  if (!workflowSteps.length || !visualItems.length || !timelineProgress) {
    console.log("Workflow elements not found");
    return;
  }

  let currentStep = 0;
  const totalSteps = workflowSteps.length;

  // Function to update active step
  function updateActiveStep() {
    // Remove active class from all steps and visuals
    workflowSteps.forEach((step) => step.classList.remove("active"));
    visualItems.forEach((item) => item.classList.remove("active"));

    // Add active class to current step and visual
    workflowSteps[currentStep].classList.add("active");
    visualItems[currentStep].classList.add("active");

    // Update timeline progress
    const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
    timelineProgress.style.height = `${progressPercentage}%`;

    // Increment step or reset to beginning
    currentStep = (currentStep + 1) % totalSteps;
  }

  // Initialize first step as active
  updateActiveStep();

  // Set interval to automatically change steps every 4 seconds
  setInterval(updateActiveStep, 4000);
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      this.classList.toggle("active");
    });
  }
});
