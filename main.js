// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle the "open" class when the menu button is clicked
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the mobile menu when any nav link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal configuration for animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal Animations
ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});
ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 4500,
});
ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});
ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});

// Lightbox Functions
// Function to open the lightbox and display the clicked image in full screen
function openLightbox(imageId) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");

  // Map imageId to actual image sources
  var imageSrc = `assets/photo (${imageId.replace('photo', '')}).jpg`;
  
  // Update the source of the lightbox image based on the clicked image
  lightboxImg.src = imageSrc;

  // Show the lightbox
  lightbox.classList.add("show");
  document.body.style.overflow = 'hidden';
}

// Function to close the lightbox
function closeLightbox() {
  var lightbox = document.getElementById("lightbox");

  // Hide the lightbox
  lightbox.classList.remove("show");
  document.body.style.overflow = 'auto';
}

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Cycling Quotes Functionality
const quotes = [
  { text: "一期一会", translation: "(Ichi-go ichi-e) - Treasure every encounter, for it will never recur." },
  { text: "七転び八起き", translation: "(Nana korobi ya oki) - Fall seven times, stand up eight." },
  { text: "花鳥風月", translation: "(Kachō fūgetsu) - Experience the beauty of nature." },
  { text: "温故知新", translation: "(Onko chishin) - Learn from the past to discover new things." },
  { text: "十人十色", translation: "(Jū nin to iro) - To each their own - everyone has different tastes." },
  { text: "猿も木から落ちる", translation: "(Saru mo ki kara ochiru) - Even monkeys fall from trees - everyone makes mistakes." },
  { text: "継続は力なり", translation: "(Keizoku wa chikara nari) - Continuity is strength." },
  { text: "千里の道も一歩から", translation: "(Senri no michi mo ippo kara) - A journey of a thousand miles begins with a single step." }
];

let currentQuoteIndex = 0;

function cycleQuote() {
  const quoteText = document.getElementById('quote-text');
  const quoteTranslation = document.getElementById('quote-translation');
  
  // Fade out
  quoteText.style.opacity = '0';
  quoteTranslation.style.opacity = '0';
  
  setTimeout(() => {
    // Update quote
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteText.textContent = quotes[currentQuoteIndex].text;
    quoteTranslation.textContent = quotes[currentQuoteIndex].translation;
    
    // Fade in
    quoteText.style.opacity = '1';
    quoteTranslation.style.opacity = '1';
  }, 500);
}

// Initialize first quote and start cycling
window.addEventListener('DOMContentLoaded', () => {
  const quoteText = document.getElementById('quote-text');
  const quoteTranslation = document.getElementById('quote-translation');
  
  if (quoteText && quoteTranslation) {
    quoteText.textContent = quotes[0].text;
    quoteTranslation.textContent = quotes[0].translation;
    
    // Change quote every 5 seconds
    setInterval(cycleQuote, 5000);
  }
});

// Add scroll animations for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section, .month-section');
  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
});

// Add scrolled class to nav on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav__links a').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to clicked link
    if (this.classList.contains('nav__links')) {
      this.classList.add('active');
    }
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Highlight active section in navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

function highlightNav() {
  let scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);

// Back to Top Button functionality
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
