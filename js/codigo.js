const menuBtn = document.querySelector('nav');
const menuClick = document.querySelector('ul');
const menuHouse = document.querySelector('.menu');

menuHouse.addEventListener('click', function(){
    menuBtn.classList.toggle("agrandar");
    menuClick.classList.toggle("menuClk");
});