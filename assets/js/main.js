let menu = document.querySelector('.menu-wrapper');
let btnShow = document.getElementById('burger');
let hamburgerMenu = document.getElementById('hamburger');
let closeMenu = document.getElementById('cross');

let btnSchedule = document.getElementById('scheduleDemo');
let selectDate = document.querySelector('.calendrier');
let btnLetsGo = document.getElementById('letsGo');

function toggMenu() {
    if(menu.style.display === 'none' && hamburgerMenu.style.display != 'none') {
        menu.style.display = 'flex';
        hamburgerMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    } else {
        menu.style.display = 'none'
        hamburgerMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    }
}
btnShow.addEventListener('click', toggMenu);

function chooseTheDate() {
    if(selectDate.style.display === 'none') {
        selectDate.style.display = 'flex';
    } else {
        selectDate.style.display = 'none';
    }
}
btnSchedule.addEventListener('click', chooseTheDate);
btnLetsGo.addEventListener('click', chooseTheDate);