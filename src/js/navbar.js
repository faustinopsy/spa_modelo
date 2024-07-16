function renderizaNavbar() {
    const navbar = document.createElement('nav');
    navbar.innerHTML = `
        <ul>
            <a href="#news"><li> 🆕 </li></a>
            <a href="#home"><li> 🏠 </li></a>
            <a href="#results"><li> 📊 </li></a>
        </ul>
    `;
    return navbar;
}

export default renderizaNavbar;
