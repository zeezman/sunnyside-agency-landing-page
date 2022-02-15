const toogleButton = document.getElementsByClassName('toogle-btn')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toogleButton.addEventListener('click', (e) => {
    navLinks.classList.toggle('active')
    e.preventDefault()
})
