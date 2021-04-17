// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.close-btn');
// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click', () => {
    console.log('clicked');
    modalOverlay.classList.add('open-modal');
})

modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
