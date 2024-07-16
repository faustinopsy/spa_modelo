function criaMaterias(materias, onMateriaClick) {
    const materiasContainer = document.createElement('div');
    materiasContainer.id = 'materias-container';

        materiasContainer.innerHTML = '';
        materias.forEach(materia => {
            const materiaCard = document.createElement('div');
            materiaCard.classList.add('materia-card');
            materiaCard.innerHTML = `
                <h2>${materia.nome}</h2>
                <p>${materia.total_questoes} questões</p>
            `;
            materiaCard.addEventListener('click', () => {
                onMateriaClick(materia.id);
            });
            materiasContainer.appendChild(materiaCard);
        });
    

    return materiasContainer;
}

export default criaMaterias;
