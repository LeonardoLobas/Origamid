import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animação.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import scrollLista from './modules/scroll-lista.js';
import clickModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initHorario from './modules/horario.js';
import initfetchBitCoin from './modules/bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()
initfetchBitCoin();
initHorario();
initAnimaNumeros();
initMenuMobile();
initDropDown();
initTooltip();
clickModal();
scrollLista();
initTabNav();
initAccordion();
initAnimacaoScroll();
