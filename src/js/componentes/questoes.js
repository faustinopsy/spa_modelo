
function criaquestoes(materiaId, materianome) {
    const questoesContainer = document.createElement('div');
    questoesContainer.id = 'questoes-container';
    const questaoDiv = document.createElement('div');
    questaoDiv.classList.add('questao-card');
    questaoDiv.innerHTML = `
        <h2>${materianome}</h2>
        <p>opção 1</p>
        <p>opção 2</p>
        <p>opção 3</p>
    `;
    questoesContainer.appendChild(questaoDiv);


    return questoesContainer;
}

export default criaquestoes;
