import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper bundle with all modules
import Swiper from "swiper/bundle";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });

  // Initialize all functionality
  initFloatingElements();
  initCountdown();
  initParallax();
  initTypingEffect();
  initInteractiveElements();
});

// Floating elements animation
function initFloatingElements() {
  const floatingElements = document.querySelectorAll(
    ".floating-guitar, .floating-scooby, .floating-max"
  );

  floatingElements.forEach((element, index) => {
    // Add random movement
    setInterval(
      () => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const randomRotate = Math.random() * 20 - 10;

        element.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
      },
      3000 + index * 1000
    );
  });
}

// Countdown timer
function initCountdown() {
  const targetDate = new Date("September 5, 2025 18:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Create countdown element if it doesn't exist
      let countdownElement = document.querySelector(".countdown-timer");
      if (!countdownElement) {
        countdownElement = document.createElement("div");
        countdownElement.className =
          "countdown-timer flex justify-center gap-8 my-8 flex-wrap";
        countdownElement.innerHTML = `
          <div class="countdown-item text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-6 min-w-[100px] transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:border-accent">
            <span class="countdown-number block text-4xl font-bold text-accent mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${days}</span>
            <span class="countdown-label block text-sm text-white uppercase tracking-wide opacity-90">дней</span>
          </div>
          <div class="countdown-item text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-6 min-w-[100px] transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:border-accent">
            <span class="countdown-number block text-4xl font-bold text-accent mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${hours}</span>
            <span class="countdown-label block text-sm text-white uppercase tracking-wide opacity-90">часов</span>
          </div>
          <div class="countdown-item text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-6 min-w-[100px] transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:border-accent">
            <span class="countdown-number block text-4xl font-bold text-accent mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${minutes}</span>
            <span class="countdown-label block text-sm text-white uppercase tracking-wide opacity-90">минут</span>
          </div>
          <div class="countdown-item text-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-6 min-w-[100px] transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:border-accent">
            <span class="countdown-number block text-4xl font-bold text-accent mb-2" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${seconds}</span>
            <span class="countdown-label block text-sm text-white uppercase tracking-wide opacity-90">секунд</span>
          </div>
        `;

        // Insert after hero title
        const heroTitle = document.querySelector("h1");
        if (heroTitle) {
          heroTitle.parentNode.insertBefore(
            countdownElement,
            heroTitle.nextSibling
          );
        }
      } else {
        // Update existing countdown
        const numbers = countdownElement.querySelectorAll(".countdown-number");
        numbers[0].textContent = days;
        numbers[1].textContent = hours;
        numbers[2].textContent = minutes;
        numbers[3].textContent = seconds;
      }
    }
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Parallax effect
function initParallax() {
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(
      ".floating-guitar, .floating-scooby, .floating-max"
    );

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Typing effect for hero title
function initTypingEffect() {
  const heroTitle = document.querySelector("h1");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    // Start typing effect after a delay
    setTimeout(typeWriter, 500);
  }
}

// Interactive elements
function initInteractiveElements() {
  // Add hover effects to interactive elements
  document
    .querySelectorAll(
      ".flex.items-start.p-6.bg-white.rounded-2xl.shadow-lg, .bg-white.rounded-2xl.overflow-hidden.shadow-lg, .meeting-card"
    )
    .forEach(item => {
      item.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.02) translateY(-2px)";
      });

      item.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1) translateY(0)";
      });
    });

  // Initialize Swiper gallery
  initGallerySwiper();
}

// Initialize Swiper gallery
function initGallerySwiper() {
  const gallerySwiper = new Swiper(".gallery-swiper", {
    // Configure Swiper to use modules
    modules: [Autoplay],

    // Enable autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Enable loop
    loop: true,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Smooth transitions
    effect: "slide",
    speed: 600,

    // Pause autoplay on hover
    pauseOnMouseEnter: true,
  });
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach(notification => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification fixed top-5 right-5 z-50 max-w-sm p-4 rounded-lg shadow-lg transition-transform duration-300 transform translate-x-full`;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
        ? "bg-red-500"
        : "bg-blue-500";
  notification.classList.add(bgColor, "text-white");

  notification.innerHTML = `
    <div class="flex items-center justify-between">
      <span class="pr-4">${message}</span>
      <button class="notification-close text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
        ✕
      </button>
    </div>
  `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.classList.add("translate-x-full");
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Confetti effect
function createConfetti() {
  const colors = ["#ff6b35", "#f7931e", "#ffd23f", "#27ae60", "#3498db"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "fixed w-3 h-3 pointer-events-none z-40";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.animation = "confetti-fall 3s linear forwards";

    document.body.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.remove();
      }
    }, 3000);
  }

  // Add confetti animation CSS if not exists
  if (!document.querySelector("#confetti-styles")) {
    const style = document.createElement("style");
    style.id = "confetti-styles";
    style.textContent = `
      @keyframes confetti-fall {
        to {
          transform: translateY(100vh) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.keyCode);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    // Konami code activated!
    showNotification(
      "🎉 Контра-код активирован! Мальчишник будет еще круче! 🎉",
      "success"
    );
    createConfetti();

    // Add rainbow effect
    document.body.style.filter = "hue-rotate(0deg)";
    let hue = 0;
    const rainbowInterval = setInterval(() => {
      hue += 10;
      document.body.style.filter = `hue-rotate(${hue}deg)`;
      if (hue >= 360) {
        clearInterval(rainbowInterval);
        document.body.style.filter = "";
      }
    }, 100);
  }
});

// Fun facts that appear randomly
const funFacts = [
  "Факт: Гитара на мальчишнике звучит в 3 раза громче обычного!",
  "Интересный факт: В доме на колесах время течет медленнее!",
  "Статистика: Лучшие воспоминания создаются в кругу друзей!",
  "Факт: Совместные поездки укрепляют дружбу на годы вперед!",
  "Знаете ли вы: Хорошая компания делает любое место особенным!",
];

function showRandomFunFact() {
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  showNotification(fact, "info");
}

// Show random fun fact every 30 seconds
setInterval(showRandomFunFact, 30000);
