burgerBtn = document.querySelector('.header__burger');
mobileMenu = document.querySelector('.mobile__menu');
scrollHide = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    scrollHide.classList.toggle('active');
});

