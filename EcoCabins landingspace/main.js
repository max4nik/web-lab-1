const menuButton = document.querySelector('div.button-menu');
const navBar = document.querySelector('.nav');
const body = document.querySelector('body');
let menuOpen = false;
menuButton.addEventListener('click', ()=>{
    if(!menuOpen){
        navBar.classList.add('open');
        menuButton.classList.add('open');
        body.classList.add('fixed-position');
        menuOpen = true;
    } else {
        navBar.classList.remove('open');
        menuButton.classList.remove('open');
        body.classList.remove('fixed-position');
        menuOpen = false;
    }
});