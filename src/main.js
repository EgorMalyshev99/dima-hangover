import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper bundle with all modules
import Swiper from "swiper/bundle";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

// Initialize AOS (Animate On Scroll) - will be started after play button click
let aosInitialized = false;

// Lock scrolling initially
function lockScroll() {
  document.body.classList.add("scroll-locked");

  // Additional mobile scroll prevention
  document.addEventListener("touchmove", preventScroll, { passive: false });
  document.addEventListener("wheel", preventScroll, { passive: false });
}

// Unlock scrolling
function unlockScroll() {
  document.body.classList.remove("scroll-locked");

  // Remove scroll prevention listeners
  document.removeEventListener("touchmove", preventScroll);
  document.removeEventListener("wheel", preventScroll);
}

// Prevent scroll events
function preventScroll(e) {
  e.preventDefault();
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", function () {
  // Lock scrolling initially
  lockScroll();

  initCountdown();
  initInteractiveElements();
  initAudioPlayer();
  initScrollArrow();
});

// Also lock scroll on window load for better reliability
window.addEventListener("load", function () {
  lockScroll();
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
  // Generate slides for each swiper
  generateSlides(".swiper-1", 20);
  generateSlides(".swiper-2", 20);
  generateSlides(".swiper-3", 20);

  // Wait a bit for slides to be created, then initialize Swiper
  setTimeout(() => {
    initSwiperInstances();
  }, 100);
}

// Initialize Swiper instances separately
function initSwiperInstances() {
  // Slider 1 - Moving Right
  const swiper1 = new Swiper(".swiper-1", {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
    },
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 2000,
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
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 4000,
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
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 2000,
    allowTouchMove: false,
  });
}

// Generate slides with shuffled images
function generateSlides(swiperSelector, slideCount) {
  const swiperWrapper = document.querySelector(
    `${swiperSelector} .swiper-wrapper`
  );
  if (!swiperWrapper) return;

  const allImages = Array.from({ length: 26 }, (_, i) => i + 1);

  // Shuffle the array
  const shuffledImages = shuffleArray([...allImages]);

  // Take first 'slideCount' images
  const selectedImages = shuffledImages.slice(0, slideCount);

  // Generate HTML for each slide
  selectedImages.forEach(imageNum => {
    const slideHTML = `
      <div class="swiper-slide">
        <div class="overflow-hidden rounded border-gray-600 bg-gray-800">
          <div
            class="slide-bg"
            style="background-image: url('/img/${imageNum}.jpg')"
          ></div>
          <img src="/img/${imageNum}.jpg" alt="Фото ${imageNum}" class="slide-img" />
        </div>
      </div>
    `;
    swiperWrapper.insertAdjacentHTML("beforeend", slideHTML);
  });
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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

        // Unlock scrolling
        unlockScroll();

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
