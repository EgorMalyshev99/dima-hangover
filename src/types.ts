// Global types for the project

export interface EmblaCarouselInstance {
  destroy: () => void;
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
}

export interface ImageRange {
  [key: string]: number[];
}

export interface CountdownElement {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface AudioPlayer {
  audio: HTMLAudioElement | null;
  playPauseBtn: HTMLButtonElement | null;
  audioPlayer: HTMLElement | null;
  playOverlay: HTMLElement | null;
  bigPlayBtn: HTMLButtonElement | null;
  isPlaying: boolean;
}

export interface ScrollArrow {
  scrollArrow: HTMLElement | null;
  lastScrollTop: number;
  scrollThreshold: number;
}

// DOM element types
export type HeroVideo = HTMLVideoElement;
export type HeroTitle = HTMLHeadingElement;
export type CountdownTimer = HTMLDivElement;
export type EmblaContainer = HTMLElement;
export type EmblaSlide = HTMLElement;
