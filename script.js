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