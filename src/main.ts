import EmblaCarousel from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import AOS from "aos";
import type { ImageRange } from "./types";
import "aos/dist/aos.css";
import "./style.css";

// Initialize AOS (Animate On Scroll) - will be started after play button click
let aosInitialized = false;

// Lock scrolling initially
function lockScroll(): void {
  document.body.classList.add("scroll-locked");

  // Additional mobile scroll prevention
  document.addEventListener("touchmove", preventScroll, { passive: false });
  document.addEventListener("wheel", preventScroll, { passive: false });
}

// Unlock scrolling
function unlockScroll(): void {
  document.body.classList.remove("scroll-locked");

  // Remove scroll prevention listeners
  document.removeEventListener("touchmove", preventScroll);
  document.removeEventListener("wheel", preventScroll);
}

// Prevent scroll events
function preventScroll(e: Event): void {
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
        countdownElement.className = "countdown-timer";
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
        if (heroTitle && heroTitle.parentNode) {
          heroTitle.parentNode.insertBefore(
            countdownElement,
            heroTitle.nextSibling
          );
        }
      } else {
        // Update existing countdown
        const numbers = countdownElement.querySelectorAll(".countdown-number");
        numbers[0].textContent = days.toString();
        numbers[1].textContent = hours.toString();
        numbers[2].textContent = minutes.toString();
        numbers[3].textContent = seconds.toString();
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
  if (!heroTitle || heroTitle.dataset.typingStarted) {
    return;
  }

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
    .forEach((item: Element) => {
      item.addEventListener("mouseenter", function (this: Element) {
        (this as HTMLElement).style.transform = "scale(1.02) translateY(-2px)";
      });

      item.addEventListener("mouseleave", function (this: Element) {
        (this as HTMLElement).style.transform = "scale(1) translateY(0)";
      });
    });
}

// Initialize Multiple Embla Carousels
function initGalleryCarousel() {
  generateSlides(".embla-1");
  generateSlides(".embla-2");
  generateSlides(".embla-3");

  initCarouselInstances();
}

// Initialize Embla Carousel instances separately
function initCarouselInstances(): void {
  const embla1Element = document.querySelector(".embla-1") as HTMLElement;
  const embla2Element = document.querySelector(".embla-2") as HTMLElement;
  const embla3Element = document.querySelector(".embla-3") as HTMLElement;

  if (!embla1Element || !embla2Element || !embla3Element) {
    console.warn("Embla carousel elements not found");
    return;
  }

  const embla1 = EmblaCarousel(
    embla1Element,
    {
      loop: true,
    },
    [
      AutoScroll({
        speed: 1,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  const embla2 = EmblaCarousel(
    embla2Element,
    {
      loop: true,
    },
    [
      AutoScroll({
        speed: 1,
        playOnInit: true,
        direction: "backward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  const embla3 = EmblaCarousel(
    embla3Element,
    {
      loop: true,
    },
    [
      AutoScroll({
        speed: 1,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  // Save instances globally for updates
  (window as any).embla1 = embla1;
  (window as any).embla2 = embla2;
  (window as any).embla3 = embla3;
}

// Generate slides with different images for each carousel
function generateSlides(carouselSelector: string) {
  const carouselContainer = document.querySelector(
    `${carouselSelector} .embla__container`
  );
  if (!carouselContainer) {
    return;
  }

  // Define image ranges for each carousel
  const imageRanges: ImageRange = {
    ".embla-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ".embla-2": [10, 11, 12, 13, 14, 15, 16, 17, 18],
    ".embla-3": [19, 20, 21, 22, 23, 24, 25, 26],
  };

  const imageNumbers = imageRanges[carouselSelector] || [];

  // Generate HTML for each slide
  imageNumbers.forEach(imageNum => {
    const slideHTML = `
      <div class="embla__slide">
        <img src="./img/${imageNum}.jpg" alt="Фото ${imageNum}" class="slide-img" />
      </div>
    `;
    carouselContainer.insertAdjacentHTML("beforeend", slideHTML);
  });
}

// Audio Player functionality
function initAudioPlayer(): void {
  const audio = document.getElementById(
    "backgroundAudio"
  ) as HTMLAudioElement | null;
  const playPauseBtn = document.getElementById(
    "playPauseBtn"
  ) as HTMLButtonElement | null;
  const audioPlayer = document.querySelector(
    ".audio-player"
  ) as HTMLElement | null;
  const playOverlay = document.getElementById(
    "playOverlay"
  ) as HTMLElement | null;
  const bigPlayBtn = document.getElementById(
    "bigPlayBtn"
  ) as HTMLButtonElement | null;

  if (!audio || !playPauseBtn || !playOverlay || !bigPlayBtn) {
    return;
  }

  let isPlaying = false;

  // Function to start audio and hide overlay
  function startAudio(): void {
    // Start video autoplay
    const heroVideo = document.querySelector(
      "#home video"
    ) as HTMLVideoElement | null;
    if (heroVideo) {
      heroVideo.play().catch((error: Error) => {
        console.log("Video autoplay failed:", error);
      });
    }

    if (audio) {
      audio
        .play()
        .then(() => {
          if (playPauseBtn) {
            playPauseBtn.textContent = "⏸️";
          }
          if (audioPlayer) {
            audioPlayer.classList.add("playing");
          }
          isPlaying = true;

          // Hide the fullscreen overlay
          if (playOverlay) {
            playOverlay.classList.add("hidden");
          }

          // Unlock scrolling
          unlockScroll();

          // Start typing effect for h1
          initTypingEffect();

          // Initialize Swiper gallery
          initGalleryCarousel();

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
        .catch((error: Error) => {
          console.log("Audio play failed:", error);
        });
    }
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
      if (audio) {
        audio.pause();
      }
      if (playPauseBtn) {
        playPauseBtn.textContent = "▶️";
      }
      if (audioPlayer) {
        audioPlayer.classList.remove("playing");
      }
      isPlaying = false;
    } else {
      if (audio) {
        audio
          .play()
          .then(() => {
            if (playPauseBtn) {
              playPauseBtn.textContent = "⏸️";
            }
            if (audioPlayer) {
              audioPlayer.classList.add("playing");
            }
            isPlaying = true;
          })
          .catch((error: Error) => {
            console.log("Audio play failed:", error);
          });
      }
    }
  });

  // Update button when audio ends
  audio.addEventListener("ended", function () {
    if (playPauseBtn) {
      playPauseBtn.textContent = "▶️";
    }
    if (audioPlayer) {
      audioPlayer.classList.remove("playing");
    }
    isPlaying = false;
  });

  // Update button when audio is paused
  audio.addEventListener("pause", function () {
    if (playPauseBtn) {
      playPauseBtn.textContent = "▶️";
    }
    if (audioPlayer) {
      audioPlayer.classList.remove("playing");
    }
    isPlaying = false;
  });

  // Update button when audio is playing
  audio.addEventListener("play", function () {
    if (playPauseBtn) {
      playPauseBtn.textContent = "⏸️";
    }
    if (audioPlayer) {
      audioPlayer.classList.add("playing");
    }
    isPlaying = true;
  });

  // Loop audio when it ends
  audio.addEventListener("ended", function () {
    if (audio) {
      audio.currentTime = 0;
      if (isPlaying) {
        audio.play();
      }
    }
  });
}

// Scroll Arrow functionality
function initScrollArrow(): void {
  const scrollArrow = document.querySelector(
    ".scroll-arrow"
  ) as HTMLElement | null;
  if (!scrollArrow) {
    return;
  }

  const scrollThreshold = 100; // Показывать стрелочку только если прокрутка меньше 100px

  function handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
      // Скрыть стрелочку при прокрутке вниз
      if (scrollArrow) {
        scrollArrow.classList.add("hidden");
      }
    } else {
      // Показать стрелочку при возврате наверх
      if (scrollArrow) {
        scrollArrow.classList.remove("hidden");
      }
    }
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
