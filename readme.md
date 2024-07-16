# Mobile First SPA Quiz App

Este é um modelo básico de uma aplicação Single Page Application (SPA) focada em mobile first. Esta aplicação foi criada para ensinar alguns conceitos importantes sobre o desenvolvimento de SPAs, incluindo modularidade, roteamento baseado em hash, e a manipulação dinâmica do DOM usando JavaScript puro.
Este é o modelo da refatoração de um aplicativo que já tinha lançado a um tempo com PHP e javascrip, mas dessa vez refatorei deixando as partes completamente separadas deixando o PHP apenas como API servidora dos dados e o SPA será tranformado em um aplicativo hibrido com o Capacitor, mas aqui deixarei apenas o molde para orientar alguns alunos na contrução rápida de uma aplicação frontend com javascript vanilha.

## Características do Projeto

- **Mobile First:** O design foi pensado primeiro para dispositivos móveis, garantindo uma ótima experiência para usuários em smartphones e tablets.
- **SPA (Single Page Application):** Toda a navegação e renderização de conteúdo é gerenciada em uma única página, proporcionando uma experiência mais rápida e fluida para o usuário.
- **Componentização:** Uso de componentes modulares para facilitar a manutenção e escalabilidade do código.
- **Manipulação Dinâmica do DOM:** Utilização de `document.createElement` e `appendChild` para manipular o DOM de forma segura e eficiente.

## Estrutura do Projeto

```
/project-root
│
├── /js
│   ├── app.js
│   ├── router.js
│   ├── navbar.js
│   ├── fontSize.js
│   ├──/componentes
│         ├── materias.js
│         ├── listarResultados.js
│         ├── novidades.js
│         ├── questoes.js
│
├── /css
│   └── styles.css
│
└── index.html
```

## Arquivos Principais
- app.js: Ponto de entrada principal da aplicação. Inicializa a navbar e verifica o hash da URL para renderizar o componente correto.
- router.js: Gerencia o roteamento da aplicação, renderizando os componentes conforme a URL hash.
- navbar.js: Cria e renderiza a navbar da aplicação.
- materias.js: Componente que exibe a lista de matérias disponíveis.
- listarResultados.js: Componente que exibe os resultados das provas.
- novidades.js: Componente que exibe as novidades.
- questoes.js: Componente que exibe as questões de uma matéria específica.
- fontSize.js: Gerencia o controle de tamanho de fonte da aplicação.
## Vantagens de uma SPA
- Performance: As SPAs carregam os recursos HTML, CSS e JavaScript uma única vez, resultando em uma navegação mais rápida e suave.
- Experiência do Usuário: Oferece uma experiência mais parecida com um aplicativo nativo, sem recarregar a página inteira ao navegar entre diferentes seções.
- Desenvolvimento: Facilita a manutenção e o desenvolvimento contínuo, pois a lógica de renderização pode ser dividida em componentes reutilizáveis.
## Como Executar
Clone o repositório para o seu ambiente local.
Abra o arquivo index.html em um navegador.
Explore a aplicação navegando pelas diferentes seções (Home, Resultados, Novidades) através da navbar.
Requisitos
Navegador moderno que suporte ES6 e módulos JavaScript.
Conexão com a internet para carregar os recursos da API.
## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.