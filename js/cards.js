let cadr = document.querySelectorAll('.cadrs-modal');

for (let i = 0; i < cadr.length; i++) {
    cadr[i].onclick = () => {
        cadr[i].classList.toggle('active');
        document.querySelector('body').classList.toggle('active');    
    };
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