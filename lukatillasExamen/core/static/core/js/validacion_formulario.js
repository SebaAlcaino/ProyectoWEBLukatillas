$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault(); 
      
      var nombre = $('#nombre').val();
      var email = $('#email').val();
      var telefono = $('#telefono').val();
      var direccion = $('#direccion').val();
      var genero = $('#genero').val();
      var talla = $('#talla').val();
      var modelo = $('#modelo').val();
      var marca = $('#marca').val();
      var terminos = $('#terminos').prop('checked');
      
      if (nombre === '') {
        $('#nombreError').text('Este campo es obligatorio');
      } else {
        $('#nombreError').text('');
      }
      
      if (email === '') {
        $('#emailError').text('Este campo es obligatorio');
      } else {
        $('#emailError').text('');
      }
      
      if (telefono === '') {
        $('#telefonoError').text('Este campo es obligatorio');
      } else {
        $('#telefonoError').text('');
      }
      
      if (direccion === '') {
        $('#direccionError').text('Este campo es obligatorio');
      } else {
        $('#direccionError').text('');
      }
      
      if (genero === '') {
        $('#generoError').text('Este campo es obligatorio');
      } else {
        $('#generoError').text('');
      }
      
      if (talla === '') {
        $('#tallaError').text('Este campo es obligatorio');
      } else {
        $('#tallaError').text('');
      }
      
      if (modelo === '') {
        $('#modeloError').text('Este campo es obligatorio');
      } else {
        $('#modeloError').text('');
      }
      
      if (marca === '') {
        $('#marcaError').text('Este campo es obligatorio');
      } else {
        $('#marcaError').text('');
      }
      
      if (!terminos) {
        $('#terminosError').text('Debes aceptar los términos y condiciones');
      } else {
        $('#terminosError').text('');
      }
      
      if (nombre !== '' && email !== '' && telefono !== '' && direccion !== '' && genero !== '' && talla !== '' && modelo !== '' && marca !== '' && terminos) {
        
        $('#myForm')[0].reset();
      }
    });
  });
  