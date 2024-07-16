document.addEventListener('DOMContentLoaded', () => {
    const aumentaFonte = document.getElementById('a-font');
    const diminuiFonte = document.getElementById('d-font');
    const minFontSize = 0.5;  
    const maxFontSize = 1.5;  

    aumentaFonte.addEventListener('click', () => {
        ajustaFonte(0.1);
    });

    diminuiFonte.addEventListener('click', () => {
        ajustaFonte(-0.1);
    });

    function ajustaFonte(altera) {
        const root = document.documentElement;
        const tamanhoAtual = parseFloat(getComputedStyle(root).getPropertyValue('--font-size'));
        let novoTamnaho = tamanhoAtual + altera;
        if (novoTamnaho < minFontSize) {
            novoTamnaho = minFontSize;
        } else if (novoTamnaho > maxFontSize) {
            novoTamnaho = maxFontSize;
        }
        root.style.setProperty('--font-size', `${novoTamnaho}em`);
    }
});
