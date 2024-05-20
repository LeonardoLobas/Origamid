export default function initTooltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)

    })

    function onMouseOver(event) {
        const tooltipbox = criarToolTipBox(this);

        onMouseMove.tooltipbox = tooltipbox;
        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.tooltipbox = tooltipbox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    const onMouseLeave = {
        tooltipbox: '',
        element: '',
        handleEvent() {
            this.tooltipbox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave)
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipbox.style.top = event.pageY + 20 + 'px';
            this.tooltipbox.style.left = event.pageX + 20 + 'px';
        }
    }



    function criarToolTipBox(element) {
        const tooltipbox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipbox.classList.add('tooltip');
        tooltipbox.innerText = text;
        document.body.appendChild(tooltipbox);
        return tooltipbox;
    }
}

initTooltip()