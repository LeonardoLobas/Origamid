

// ---------------FAQ--------------------------------------------------

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();

//---------------------------LINKS INTERNOS SCROLL--------------------------------
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave();


// ----------------------------ANIMAÇÃO AO SCROLL-------------------
function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < 600) {
                    section.classList.add('ativoScroll');
                } else {
                    section.classList.remove('ativoScroll')
                }
            })
        }
        
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll()


// ----------------------------- LISTA ANIMAIS ('SCROLL')--------------------------------
const animaisLista = document.querySelector('.animais-lista')
const tabcontent = document.querySelectorAll('.js-tabcontent section')
function scrollLista() {
    const scrollTop = animaisLista.scrollTop
    console.log(scrollTop)
    if (scrollTop > 0 && scrollTop < 300) {
        tabcontent[0].classList.add('ativo')
        tabcontent[1].classList.remove('ativo')
    } 
    else if (scrollTop > 300 && scrollTop < 600) {
        tabcontent[0].classList.remove('ativo')
        tabcontent[1].classList.add('ativo')
        tabcontent[2].classList.remove('ativo')
        
    }
    else if (scrollTop > 600 && scrollTop < 900) {
        tabcontent[1].classList.remove('ativo')
        tabcontent[2].classList.add('ativo')
        tabcontent[3].classList.remove('ativo')
        
    }
    else if (scrollTop > 900 && scrollTop < 1200) {
        tabcontent[2].classList.remove('ativo')
        tabcontent[3].classList.add('ativo')
        tabcontent[4].classList.remove('ativo')
    
    }
    else if (scrollTop > 1200 && scrollTop < 1500) {
        tabcontent[3].classList.remove('ativo')
        tabcontent[4].classList.add('ativo')
        tabcontent[5].classList.remove('ativo')

    } 
    else if (scrollTop > 1500 ){
        tabcontent[5].classList.add('ativo')
        tabcontent[4].classList.remove('ativo')
    }
}
animaisLista.addEventListener('scroll', scrollLista)



//-----------------------LISTA ANIMAIS ('CLICK')---------------------------------------

function initTabNav(){
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');
    tabcontent[0].classList.add('ativo')


    if (tabmenu.length && tabcontent.length) {
        function activeTab(index) {
            tabcontent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabcontent[index].classList.add('ativo');

        }

        tabmenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index)
            })
        });
    }
}
initTabNav();