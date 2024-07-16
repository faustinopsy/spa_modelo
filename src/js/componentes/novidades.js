
function criaNovidades() {
    const novidadesContainer = document.createElement('div');
    novidadesContainer.id = 'results-container';
    novidadesContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    return novidadesContainer;
}

export default criaNovidades;
