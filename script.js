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
      
      // Verificar las credenciales específicas
      if (email === 'kevin@PET-ID.mx' && password === '123456') {
          // Redirigir a la página de perfil de usuario
          window.location.href = 'perfil.html';
      } else {
          // Mostrar mensaje de error para credenciales inválidas
          alert('Credenciales inválidas. Por favor, intente de nuevo.');
      }
  });

  signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const petId = document.getElementById('signupPetId').value;
      console.log('Registro enviado', { username, email, password, petId });
      // Aquí iría la lógica para enviar los datos al servidor
  });
});


// Selección de elementos
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatBtns = document.querySelectorAll(".chat-btn"); // Botones para preguntas predeterminadas

// Función para crear un mensaje en el chat
const createChatMessage = (message, sender) => {
  const li = document.createElement("li");
  li.classList.add("chat", sender);
  let content = sender === "outgoing" 
    ? `<p>${message}</p>` 
    : `<span class="material-symbols-outlined">PET-ID</span><p>${message}</p>`;
  li.innerHTML = content;
  chatbox.appendChild(li);
  chatbox.scrollTop = chatbox.scrollHeight; // Desplazar hacia abajo al último mensaje
};

// Función para manejar la respuesta del chatbot según la pregunta seleccionada
const handleChatResponse = (question) => {
  let response = "";

  switch(question) {
    case "¿Qué productos ofrece Pet-Id?":
      response = `Pet-Id ofrece collares personalizados para mascotas con un código QR grabado. Puedes ver nuestros productos aquí en el apartado de <a href="https://kovitpm.github.io/PET-ID/productos.html" style="text-decoration: underline;">Productos</a>.`;      break;
    case "¿Cómo funciona el collar con QR?":
      response = "El collar con QR permite acceder al perfil de la mascota escaneando el código con un lector QR.";
      break;
    case "¿Qué debo hacer si mi mascota está perdida?":
      response = "Si tu mascota está perdida, el QR redirige a una página para que la persona que la encuentre pueda dar aviso a los dueños.";
      break;
    default:
      response = "Lo siento, no entiendo esa pregunta.";
  }

  createChatMessage(response, "incoming");
};

// Función para manejar el clic de los botones
const handleButtonClick = (event) => {
  const question = event.target.dataset.question; // Obtener la pregunta desde el atributo "data-question"
  
  createChatMessage(question, "outgoing"); // Mostrar la pregunta seleccionada en el chat
  
  // Responder con el mensaje correspondiente
  setTimeout(() => handleChatResponse(question), 600);
};

// Evento para los botones de las preguntas
chatBtns.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

// Evento para cerrar el chatbot
closeBtn.addEventListener("click", () => {
  document.body.classList.remove("show-chatbot");
});

// Evento para abrir/cerrar el chatbot
chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
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


