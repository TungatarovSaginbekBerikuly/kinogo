init();

function init() {
    let tabsBody = document.querySelectorAll('.product-tabs-body');
    for (let i = 1; i < tabsBody.length; i++) {
        tabsBody[i].style.display = 'none';
    }
}

let tabsBtn = document.querySelectorAll('.product-tabs-btn');
tabsBtn.forEach(function(element) {
    element.onclick = showTabs;
});

function showTabs() {
    let data = this.getAttribute('data');

    let tabsBody = document.querySelectorAll('.product-tabs-body');
    for (let i = 0; i < tabsBody.length; i++) {
        tabsBody[i].style.display = 'none';
        tabsBtn[i].classList.remove('active');
    }

    document.querySelector(`.product-tabs-body[data="${data}"]`).style.display = 'block';
    document.querySelector(`.product-tabs-btn[data="${data}"]`).classList.add('active');
}