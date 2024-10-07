document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.categories button');
    const genreTitle = document.createElement('h2');
    genreTitle.className = 'genre-title';
    document.querySelector('.categories').insertAdjacentElement('afterend', genreTitle);

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {

            genreTitle.textContent = button.textContent;

            categoryButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    const rentButtons = document.querySelectorAll('.book button');
    rentButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.innerHTML = 'No disponible';
            button.style.backgroundColor = '#ff4c4c';
});
    });

    const loginButton = document.querySelector('.auth-buttons button:nth-child(1)');
    loginButton.addEventListener('click', () => {
        alert('Inicio de sesión exitoso');
    });
});

