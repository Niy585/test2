const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal ('.text',{delay: 200, origin: 'top'})
sr.reveal ('.form-container form',{delay: 800, origin: 'left'})
sr.reveal ('.heading',{delay: 200, origin: 'top'})
sr.reveal ('.ride-container .box',{delay: 100, origin: 'top'})
sr.reveal ('.services-container .box',{delay: 600, origin: 'top'})
sr.reveal ('.advantages-container .box',{delay: 600, origin: 'top'})
sr.reveal ('.about-container',{delay: 600, origin: 'top'})
sr.reveal ('.reviews-container .box',{delay: 600, origin: 'top'})

const dropInput = document.querySelector('input.drop');
const dropList = document.querySelector('ul.drop');
dropInput.addEventListener('focus', show, false);
dropInput.addEventListener('blur', hide, false);
dropList.addEventListener('click', dropSelect, false);

function hide() {
  setTimeout(() =>
    dropList.classList.remove('visible'),
  300);
}
function show() {
  setTimeout(() =>
    dropList.classList.add('visible'),
  300);  
}

function dropSelect(e) {
  dropInput.value = e.target.textContent
  hide();
}

$(".phone").mask("+7(999)999-99-99");