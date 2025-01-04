let selectbox = document.querySelectorAll('.selectbox-btn');
    
for(let i = 0; i < selectbox.length; i++) {
    selectbox[i].onclick = showSelectbox;
}

function showSelectbox() {
    let data = this.dataset.selectbox;
    let targetBody = document.querySelector(`.selectbox-body[data-selectbox="${data}"]`);

    if (this.classList.contains('active')) {
        this.classList.remove('active');
        targetBody.classList.remove('active');
        return;
    }

    document.querySelectorAll('.selectbox-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.selectbox-body').forEach(body => body.classList.remove('active'));

    this.classList.add('active');
    targetBody.classList.add('active');

}