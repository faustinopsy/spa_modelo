
function criaResultados() {
    const header = document.querySelector('header');
    header.innerHTML = `<h4>Provas de Concurso</h4><p>Resultados</p>`;
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
    resultsContainer.innerHTML = '<p>Nenhum resultado salvo encontrado.</p>';
    return resultsContainer;
}

export default criaResultados;
