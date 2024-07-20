
function criaResultados() {
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
    resultsContainer.innerHTML = '<p>Nenhum resultado salvo encontrado.</p>';
    return resultsContainer;
}

export default criaResultados;
