const form = document.getElementById('formulario');

// Cambia el fondo del elemento enfocado a amarillo mientras lo seleccionan
form.addEventListener('focus', (evento) => {
    evento.target.style.background = 'Yellow';
}, true);

// Cambia el fondo del elemento desenfocado a rosa cuando cursor sale del campo
form.addEventListener('blur', (evento) => {
    evento.target.style.background = 'pink';
}, true);

// Muestra alerta y registra los valores de los campos de texto cuando se hace clic en el botón.
function enviarDatos(evento) {
    evento.preventDefault();
    alert('se estan enviando los datos');

    const formData = new FormData(form);
    const datos = {
        texto1: formData.get('texto1'),
        texto2: formData.get('texto2')
    };

    console.log('Datos a enviar:', datos);
}


