// Obtener el formulario por su ID
const form = document.getElementById("formulario");

// Obtener los elementos del formulario por su nombre
const nombre = form.elements["nombre"];
const correo = form.elements["correo"];
const telefono = form.elements["telefono"];
const direccion = form.elements["direccion"];
const genero = form.elements["genero"];

// Agregar un evento "submit" al formulario
form.addEventListener("submit", (event) => {
  // Detener el comportamiento predeterminado del formulario
  event.preventDefault();

  // Obtener los valores de los elementos del formulario
  const nombreValue = nombre.value;
  const correoValue = correo.value;
  const telefonoValue = telefono.value;
  const direccionValue = direccion.value;
  const generoValue = genero.value;

  // Validar que los campos obligatorios no estén vacíos
  if (
    !nombreValue ||
    !correoValue ||
    !telefonoValue ||
    !direccionValue ||
    !generoValue
  ) {
    alert("Por favor complete todos los campos obligatorios");
    return;
  }

  // Crear un objeto con los datos del formulario
  const formData = {
    nombre: nombreValue,
    correo: correoValue,
    telefono: telefonoValue,
    direccion: direccionValue,
    genero: generoValue,
  };

  // Enviar el formulario
  enviarFormulario(formData);
});

// Función para enviar el formulario
function enviarFormulario(formData) {
  // Aquí puedes hacer lo que necesites con los datos del formulario
  console.log(formData);

  // Mostrar un mensaje de éxito
  alert("El formulario se ha enviado con éxito");
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const genero = document.querySelector('input[name="genero"]:checked');

  // Validación del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
    return;
  }

  // Validación de campos requeridos
  if (!nombre || !email || !telefono || !direccion || !genero) {
    alert("Por favor complete todos los campos del formulario.");
    return;
  }

function onFormSubmit() {
    if (validateForm()) {
      alert("Datos registrados correctamente");
      return true;
    } else {
      return false;
    }
  }
}