// Obtener el formulario por su ID
const form = document.getElementById("myForm");

// Obtener los elementos del formulario por su nombre
const nombre = form.elements["nombre"];
const email = form.elements["email"];
const telefono = form.elements["telefono"];
const direccion = form.elements["direccion"];
const genero = form.elements["genero"];

// Agregar un evento "submit" al formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const telefonoValue = telefono.value.trim();
  const direccionValue = direccion.value.trim();
  const generoValue = genero.value;

  // Validar que los campos obligatorios no estén vacíos
  if (
    !nombreValue ||
    !emailValue ||
    !telefonoValue ||
    !direccionValue ||
    !generoValue
  ) {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  // Crear un objeto con los datos del formulario
  const formData = {
    nombre: nombreValue,
    email: emailValue,
    telefono: telefonoValue,
    direccion: direccionValue,
    genero: generoValue,
  };

  // Enviar el formulario
  enviarFormulario(formData);

  // Limpiar el formulario después de enviar los datos
  form.reset();
});

// Función para enviar el formulario
function enviarFormulario(formData) {
  // Aquí puedes hacer lo que necesites con los datos del formulario
  console.log(formData);

  // Mostrar un mensaje de éxito
  alert("El formulario se ha enviado con éxito");
}
