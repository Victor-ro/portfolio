const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

//quando clicar no botão, a função é acionada.
button.addEventListener('click', function () {
    // a classe 'active' vai ser ativada ou desativada
    // de acordo com o clique no botão:
    mobileNavbar.classList.toggle('active')
})

//pega o valor do scroll e caso ele seja maior que zero, ativa a sombra da navbar
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) {
        return navbar.classList.add('active');
    } else {
        return navbar.classList.remove('active');
    }
});