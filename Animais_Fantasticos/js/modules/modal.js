export default function clickModal() {
    const abrirLogin = document.querySelector('[data-modal="abrir"]')
    const containerModal = document.querySelector('[data-modal="container"]')

    if (abrirLogin  && containerModal) {
        function toggleModal(event) {
            event.preventDefault()
            containerModal.classList.toggle('ativo');
        }

        function cliqueForaModal(event) {
            if (event.target === this)
            toggleModal(event);
        }

        abrirLogin.addEventListener('click', toggleModal)
        containerModal.addEventListener('click', cliqueForaModal)
    }
}

