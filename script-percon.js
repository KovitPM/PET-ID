document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const contenidoNormal = document.getElementById('contenidoNormal');
    const contenidoEspecial = document.getElementById('contenidoEspecial');
    const chatForm = document.getElementById('chatForm');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const locationButton = document.getElementById('locationButton');
    const imageInput = document.getElementById('imageInput');

    // Verificar si estamos en la página de perfil
    if (toggleButton) {
        const mensajeElement = document.getElementById('mensaje');

        function actualizarMensaje(checked) {
            if (checked) {
                mensajeElement.textContent = "¡Búsqueda iniciada! Te notificaremos si alguien lo ha visto.";
                mensajeElement.className = "mensaje activo";
            } else {
                mensajeElement.textContent = "¿Qué tal se encuentra Firu Lais? :)";
                mensajeElement.className = "mensaje inactivo";
            }
        }

        toggleButton.addEventListener('change', function() {
            localStorage.setItem('toggleState', this.checked);
            actualizarMensaje(this.checked);
        });

        // Restaurar el estado del botón y el mensaje al cargar la página
        const savedState = localStorage.getItem('toggleState');
        if (savedState !== null) {
            const isChecked = savedState === 'true';
            toggleButton.checked = isChecked;
            actualizarMensaje(isChecked);
        }
    }

    // Verificar si estamos en la página de contenido
    if (contenidoNormal && contenidoEspecial) {
        function updateContent() {
            const toggleState = localStorage.getItem('toggleState');
            if (toggleState === 'true') {
                contenidoNormal.style.display = 'none';
                contenidoEspecial.style.display = 'block';
            } else {
                contenidoNormal.style.display = 'block';
                contenidoEspecial.style.display = 'none';
            }
        }

        // Actualizar el contenido inmediatamente y cada segundo
        updateContent();
        setInterval(updateContent, 1000);

        // Funcionalidad del chat
        if (chatForm && chatMessages) {
            chatForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (messageInput.value.trim() !== '') {
                    addMessage(messageInput.value);
                    messageInput.value = '';
                }
            });

            locationButton.addEventListener('click', function() {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        addMessage(`Ubicación: ${latitude}, ${longitude}`, 'location');
                    });
                } else {
                    alert("Geolocalización no está disponible en tu navegador.");
                }
            });

            imageInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        addMessage(`<img src="${e.target.result}" alt="Imagen subida">`);
                    };
                    reader.readAsDataURL(file);
                }
            });

            function addMessage(message, type = '') {
                const messageElement = document.createElement('div');
                messageElement.className = `message ${type}`;
                messageElement.innerHTML = message;
                chatMessages.appendChild(messageElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    }
});