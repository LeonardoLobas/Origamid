import { Slide, SlideNav } from "./slide.js";

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.changeSlide(1);
slide.activePrevSlide();
slide.changeSlideOnEnd();
slide.addArrow('.prev', '.next')
slide.addControl();