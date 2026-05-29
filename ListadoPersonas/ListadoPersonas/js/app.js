// Lista inicial de personas que aparecen al cargar la página
const personas = [
    new Persona('Juan', 'Pérez'),
    new Persona('Karla', 'Lara')
];

// Muestra todas las personas guardadas en la pantalla
function mostrarPersonas(){
    console.log('Mostrar personas');
    let text = '';
    for(let persona of personas){
        console.log(persona);
        text += `<li>${persona._nombre} ${persona._apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = text;
}

// Toma los datos del formulario y agrega una nueva persona a la lista
function agregarPersona(){
    const forms = document.forms['formulario'];
    const nombre = forms['nombre'];
    const apellido = forms['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else {
        alert('No puedes ingresar datos vacios');
    }
}