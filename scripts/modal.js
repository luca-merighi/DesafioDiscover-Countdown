const modal = document.querySelector('#modal')
const closeModal = document.querySelector('.close-button')
const openModal = document.querySelector('.modal-link')
const send = document.querySelector('.button')

openModal.addEventListener('click', function() {
    modal.classList.add('active')
})

closeModal.addEventListener('click', function() {
    modal.classList.remove('active')
})

send.addEventListener('click', function() {
    modal.classList.remove('active')
})

