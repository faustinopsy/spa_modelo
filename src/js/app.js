import renderizaNavbar from './navbar.js';
import verificaHashURL from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const local ={
        'topo': header,
        'baixo':footer
    }

    header.innerHTML = `<h4>Provas de Concurso</h4>`;
    const navbar = renderizaNavbar();

    function alteraNav(){
        const nav = innerWidth < 600 ? local['baixo'] : local['topo']
        nav.appendChild(navbar);
    }
    window.addEventListener('resize', alteraNav)
    
    alteraNav()
    verificaHashURL(); 
});
