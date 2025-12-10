// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 5000); // Hide after 5 seconds
});

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
function openLightbox(imageSrc) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  
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

// Add scrolled class to nav on scroll & update progress bar
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  // Update scroll progress indicator
  const scrollProgress = document.querySelector('.scroll-progress');
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + '%';
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

// Animated Counter for Stats
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
}

// Observe stat cards for animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        if (stat.textContent === '0') {
          animateCounter(stat);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe the stats container
document.addEventListener('DOMContentLoaded', () => {
  const statsContainer = document.querySelector('.stats-container');
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }
});

// Trivia Carousel
let currentTriviaIndex = 0;
const triviaItems = document.querySelectorAll('.trivia-item');
const triviaDots = document.querySelectorAll('.dot');
const triviaPrevBtn = document.getElementById('trivia-prev');
const triviaNextBtn = document.getElementById('trivia-next');

function showTrivia(index) {
  // Remove active class from all items
  triviaItems.forEach(item => {
    item.classList.remove('active', 'prev');
  });
  
  // Remove active class from all dots
  triviaDots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Add active class to current item and dot
  if (triviaItems[index]) {
    triviaItems[index].classList.add('active');
  }
  if (triviaDots[index]) {
    triviaDots[index].classList.add('active');
  }
}

function nextTrivia() {
  currentTriviaIndex = (currentTriviaIndex + 1) % triviaItems.length;
  showTrivia(currentTriviaIndex);
}

function prevTrivia() {
  currentTriviaIndex = (currentTriviaIndex - 1 + triviaItems.length) % triviaItems.length;
  showTrivia(currentTriviaIndex);
}

// Event listeners for trivia navigation
if (triviaNextBtn) {
  triviaNextBtn.addEventListener('click', nextTrivia);
}

if (triviaPrevBtn) {
  triviaPrevBtn.addEventListener('click', prevTrivia);
}

// Dot navigation
triviaDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTriviaIndex = index;
    showTrivia(currentTriviaIndex);
  });
});

// Auto-advance trivia every 8 seconds
setInterval(nextTrivia, 8000);

// Keyboard navigation for trivia (Arrow keys when not in lightbox)
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  const isLightboxOpen = lightbox && lightbox.classList.contains('show');
  
  if (!isLightboxOpen) {
    if (e.key === 'ArrowLeft') {
      prevTrivia();
    } else if (e.key === 'ArrowRight') {
      nextTrivia();
    }
  }
});

// Add visual feedback on button clicks
document.querySelectorAll('button, .btn').forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// Easter Egg - Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  
  if (key === konamiCode[konamiIndex] || e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  // Create confetti effect
  const colors = ['#f3eae5', '#2c2724', '#FFD700', '#FF69B4', '#00CED1'];
  
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-50px';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.zIndex = '99999';
      confetti.style.pointerEvents = 'none';
      confetti.textContent = ['🌸', '🎌', '🗾', '🍜', '🍣'][Math.floor(Math.random() * 5)];
      confetti.style.fontSize = '20px';
      
      document.body.appendChild(confetti);
      
      const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720 - 360}deg)`, opacity: 0 }
      ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      animation.onfinish = () => confetti.remove();
    }, i * 30);
  }
  
  // Show special message
  const message = document.createElement('div');
  message.innerHTML = '<h2>🎉 おめでとう！ 🎉</h2><p>You found the secret!</p>';
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #2c2724, #1a1715);
    color: white;
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
    z-index: 999999;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: bounceIn 0.5s ease;
  `;
  
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.style.animation = 'fadeOut 0.5s ease';
    setTimeout(() => message.remove(), 500);
  }, 3000);
}

// Add CSS animations for easter egg
const style = document.createElement('style');
style.textContent = `
  @keyframes bounceIn {
    0% { transform: translate(-50%, -50%) scale(0); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); }
  }
  
  @keyframes fadeOut {
    to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  }
`;
document.head.appendChild(style);

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
