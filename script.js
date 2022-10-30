const paginazione = document.getElementById('paginazione');
let currentPage = 1; 

paginazione.addEventListener('click', e => {
    const item = e.target;
    if(item.nodeName === 'LABEL') {
        setCheckedLabel(item.dataset.page);
    }
})

function setCheckedLabel(numberPageSelected) {
    const labels = document.querySelectorAll('#paginazione > label');
    labels[currentPage-1].classList.remove('lab-sel');
    labels[numberPageSelected-1].classList.add('lab-sel');
    currentPage = numberPageSelected;
  
}