const paginazione = document.getElementById('paginazione');
const labels = document.querySelectorAll('#paginazione > label');
const pagine = document.getElementsById('pagine');
const radioBtn = document.querySelectorAll('#pagine > input[type=radio]');
let toccoInizioX = 0;
let toccoFineX = 0;
let currentPage = 1; 

paginazione.addEventListener('click', e => {
    const item = e.target;
    if(item.nodeName === 'LABEL') {
        setCheckedLabel(item.dataset.page);
    }
})

function setCheckedLabel(numberPageSelected) {
    labels[currentPage-1].classList.remove('lab-sel');
    labels[numberPageSelected-1].classList.add('lab-sel');
    currentPage = numberPageSelected;
}

pagine.addEventListener('touchstart', touchStart, false);
pagine.addEventListener('touchend', touchEnd, false);

function touchStart(e) {
    toccoInizioX = e.changedTouches[0].screenX;
}

function touchEnd(e) {
    toccoFineX = e.changedTouches[0].screenX;
    toccoFineX < toccoInizioX ? moveTo('next') : moveTo ('prev');
}

function moveTo(direction) {
    if(direction === 'next' && currentPage < labels.lenght) {
        labels[currentPage-1].classList.remove('lab-sel');
        labels[currentPage].classList.add('lab-sel');
        radioBtn[currentPage].checked = true;
        currentPage++;
    }
}