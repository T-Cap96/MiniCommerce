// Barra de menú responsive //
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navBar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

 // Scroll de página //
 
window.onscroll = () =>{
    menu.classlist.remove('bx-x');
    navbar.classList.remove('active');
};
