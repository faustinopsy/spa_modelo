import renderizaNavbar from './navbar.js';
import verificaHashURL from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header.innerHTML = `<h4>Provas de Concurso</h4>`;
    const navbar = renderizaNavbar();
    footer.appendChild(navbar);

    verificaHashURL(); 
});
