let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Lo mejor para tu mascota";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

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
