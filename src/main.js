import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper bundle with all modules
import Swiper from "swiper/bundle";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

// Initialize AOS (Animate On Scroll) - will be started after play button click
let aosInitialized = false;

// Initialize all functionality
document.addEventListener("DOMContentLoaded", function () {
  initCountdown();
  initInteractiveElements();
  initAudioPlayer();
  initScrollArrow();
});

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
          "countdown-timer flex justify-center gap-4 lg:gap-6 my-6 flex-wrap";
        countdownElement.innerHTML = `
          <div class="countdown-item">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">дней</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">часов</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">минут</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">секунд</span>
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

// Typing effect for hero title
function initTypingEffect() {
  const heroTitle = document.querySelector("h1");
  if (!heroTitle || heroTitle.dataset.typingStarted) return;

  heroTitle.dataset.typingStarted = "true";
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

  // Start typing effect immediately
  typeWriter();
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

  // Swiper gallery will be initialized after play button click
}

// Initialize Multiple Swipers
function initGallerySwiper() {
  // Slider 1 - Moving Right
  const swiper1 = new Swiper(".swiper-1", {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 4000,
    allowTouchMove: false,
  });

  // Slider 2 - Moving Left
  const swiper2 = new Swiper(".swiper-2", {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      reverseDirection: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 7000,
    allowTouchMove: false,
  });

  // Slider 3 - Moving Right
  const swiper3 = new Swiper(".swiper-3", {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 4000,
    allowTouchMove: false,
  });
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

// Audio Player functionality
function initAudioPlayer() {
  const audio = document.getElementById("backgroundAudio");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const audioPlayer = document.querySelector(".audio-player");
  const playOverlay = document.getElementById("playOverlay");
  const bigPlayBtn = document.getElementById("bigPlayBtn");

  if (!audio || !playPauseBtn || !playOverlay || !bigPlayBtn) return;

  let isPlaying = false;

  // Function to start audio and hide overlay
  function startAudio() {
    // Start video autoplay
    const heroVideo = document.querySelector("#home video");
    if (heroVideo) {
      heroVideo.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    audio
      .play()
      .then(() => {
        playPauseBtn.textContent = "⏸️";
        audioPlayer.classList.add("playing");
        isPlaying = true;

        // Hide the fullscreen overlay
        playOverlay.classList.add("hidden");

        // Start typing effect for h1
        initTypingEffect();

        // Initialize Swiper gallery
        initGallerySwiper();

        // Initialize AOS animations
        if (!aosInitialized) {
          AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
          });
          aosInitialized = true;
        }

        console.log("Audio started successfully");
      })
      .catch(error => {
        console.log("Audio play failed:", error);
      });
  }

  // Big play button click handler
  bigPlayBtn.addEventListener("click", startAudio);

  // Click outside overlay to hide it (optional)
  playOverlay.addEventListener("click", function (e) {
    if (e.target === playOverlay) {
      startAudio();
    }
  });

  // Small play button click handler
  playPauseBtn.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.textContent = "▶️";
      audioPlayer.classList.remove("playing");
      isPlaying = false;
    } else {
      audio
        .play()
        .then(() => {
          playPauseBtn.textContent = "⏸️";
          audioPlayer.classList.add("playing");
          isPlaying = true;
        })
        .catch(error => {
          console.log("Audio play failed:", error);
        });
    }
  });

  // Update button when audio ends
  audio.addEventListener("ended", function () {
    playPauseBtn.textContent = "▶️";
    audioPlayer.classList.remove("playing");
    isPlaying = false;
  });

  // Update button when audio is paused
  audio.addEventListener("pause", function () {
    playPauseBtn.textContent = "▶️";
    audioPlayer.classList.remove("playing");
    isPlaying = false;
  });

  // Update button when audio is playing
  audio.addEventListener("play", function () {
    playPauseBtn.textContent = "⏸️";
    audioPlayer.classList.add("playing");
    isPlaying = true;
  });

  // Loop audio when it ends
  audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    if (isPlaying) {
      audio.play();
    }
  });
}

// Scroll Arrow functionality
function initScrollArrow() {
  const scrollArrow = document.querySelector(".scroll-arrow");
  if (!scrollArrow) return;

  let lastScrollTop = 0;
  const scrollThreshold = 100; // Показывать стрелочку только если прокрутка меньше 100px

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
      // Скрыть стрелочку при прокрутке вниз
      scrollArrow.classList.add("hidden");
    } else {
      // Показать стрелочку при возврате наверх
      scrollArrow.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  }

  // Добавить обработчик прокрутки
  window.addEventListener("scroll", handleScroll);

  // Добавить клик по стрелочке для прокрутки вниз
  scrollArrow.addEventListener("click", function () {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  // Инициализация при загрузке
  handleScroll();
}
