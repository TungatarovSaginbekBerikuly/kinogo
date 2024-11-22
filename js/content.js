let cadrImage = document.querySelectorAll('.ps__cadr-img');
    body = document.getElementsByTagName('body')[0];

for (let i = 0; i < cadrImage.length; i++) {
    cadrImage[i].addEventListener('click', () => {
        cadrImage[i].classList.toggle('active');
        body.classList.toggle('active');    
    });
}

// Product Show Moblie Menu
let menuBtns = document.querySelectorAll('.product-menu__btn');

for(let n = 0; n < menuBtns.length; n++) {
    menuBtns[n].addEventListener('click', () => {
        if(menuBtns[n].classList.contains('is_active')) {
            menuBtns[n].classList.remove('is_active');
        } else {
            menuBtns[n].classList.add('is_active');
        }
    });
}