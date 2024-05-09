export default function initDropDown() {

}


const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => {
  menu.addEventListener('click', handleClick)  
  menu.addEventListener('touchstart', handleClick)  
})

function handleClick(event) {
    event.preventDefault();
    this.classlist.toggle('ativo')

}