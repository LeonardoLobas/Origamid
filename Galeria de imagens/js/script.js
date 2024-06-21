import { Slide, SlideNav } from "../../Animais_Fantasticos/js/modules/slide.js";

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.addArrow('.prev', '.next')
slide.addControl('.custom-controls');