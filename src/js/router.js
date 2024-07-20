import criaMaterias from './componentes/materias.js';
import criaResultados from './componentes/listarResultados.js';
import criaNovidades from './componentes/novidades.js';
import criaquestoes from './componentes/questoes.js';

const main = document.querySelector('main');

const componentes = {
    'home': renderizaMaterias,
    'results': renderizaResultados,
    'news': renderizaNovidades
};
const materias = [
    { id: 1, nome: 'java', total_questoes: '20' },
    { id: 2, nome: 'php', total_questoes: '20' },
    { id: 3, nome: 'javascript', total_questoes: '20' },
];

function renderizaMaterias() {
    main.innerHTML = '';
    const materiasComponent = criaMaterias(materias, renderizaQuestoes);
    main.appendChild(materiasComponent);
}

function renderizaResultados() {
    main.innerHTML = '';
    const resultsComponent = criaResultados();
    main.appendChild(resultsComponent);
}

function renderizaNovidades() {
    main.innerHTML = '';
    const newsComponent = criaNovidades();
    main.appendChild(newsComponent);
}

function renderizaQuestoes(materiaId) {
    main.innerHTML = '';
    location.hash = `#${materiaId}`;
    const materia = materias.find(m => m.id == materiaId);
    if (materia) {
        const questoesComponent = criaquestoes(materiaId, materia.nome);
        main.appendChild(questoesComponent);
    }
}

function verificaHashURL() {
    const hash = window.location.hash.slice(1) || 'home';
    const renderComponent = componentes[hash];
    if (renderComponent) {
        renderComponent();
    }
}

window.addEventListener('hashchange', verificaHashURL);

export default verificaHashURL;
