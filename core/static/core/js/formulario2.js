$(document).ready(function() {
    $('#formulario').submit(function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
      // Obtener los valores ingresados por el usuario
      var nombre = $('#nombre').val();
      var rut = $('#rut').val();
      var email = $('#email').val();
      var talla = $('#talla').val();
      var modelo = $('#modelo').val();
  
      // Realiza validaciones u otras operaciones necesarias aquí
  
      // Ejemplo de cómo mostrar los valores en la consola del navegador
      console.log('Nombre: ' + nombre);
      console.log('RUT: ' + rut);
      console.log('Email: ' + email);
      console.log('Talla de calzado: ' + talla);
      console.log('Modelo de zapatilla: ' + modelo);
  
      // Aquí puedes realizar otras acciones, como enviar los datos a un servidor mediante una solicitud AJAX
  
      // Limpia el formulario después de enviar los datos
      $('#formulario')[0].reset();
    });
  });
