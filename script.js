// Funcionalidad de login/signup
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const forms = document.querySelectorAll('.form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            forms.forEach(form => form.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`${tabName}Form`).classList.add('active');
        });
    });

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        console.log('Login submitted', { email, password });
        // Aquí iría la lógica para enviar los datos al servidor
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const petId = document.getElementById('signupPetId').value;
        console.log('Signup submitted', { username, email, password, petId });
        // Aquí iría la lógica para enviar los datos al servidor
    });
});
function createPaw() {
    const paw = document.createElement('div');
    paw.classList.add('paw');
    
    const size = Math.random() * 50 + 30; // Tamaño entre 20px y 50px
    paw.style.width = `${size}px`;
    paw.style.height = `${size}px`;
    paw.style.left = `${Math.random() * 100}vw`;
    paw.style.top = `${Math.random() * 100}vh`;
    paw.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.querySelector('main').appendChild(paw);

    setTimeout(() => {
        paw.style.opacity = '0';
        setTimeout(() => paw.remove(), 500);
    }, 5000);
}

setInterval(createPaw, 200);

// Funcionalidad del menú de hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
});

// Cerrar el menú al hacer clic en un botón de navegación
const navButtons = mainNav.querySelectorAll('button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});
