$(document).ready(function() {
  // Obtener la referencia a los elementos HTML
  var inputPokemon = $('#inputPokemon');
  var btnBuscarPokemon = $('#btnBuscarPokemon');
  var btnBorrarPokemon = $('#btnBorrarPokemon');
  var pokemonData = $('#pokemonData');

  // Agregar evento click para el botón de borrar resultados
  btnBorrarPokemon.click(function() {
    // Eliminar el contenido del div de resultados
    pokemonData.html('');
  });

  // Manejar el evento 'click' del botón de búsqueda
  btnBuscarPokemon.click(function() {
    // Obtener el valor del campo de texto
    var pokemonNameOrId = inputPokemon.val().trim().toLowerCase();

    // Verificar si el campo de texto está vacío
    if (pokemonNameOrId === '') {
      // Mostrar un mensaje de advertencia
      pokemonData.html('<p style="color: red; font-weight: bold;">Escriba un nombre de Pokémon o número</p>');
      return;
    }

    // Hacer la solicitud a la API
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonNameOrId,
      success: function(pokemon) {
        // Crear una plantilla para mostrar los datos del Pokémon
        var template = `
          <h2>${pokemon.name.toUpperCase()}</h2>
          <img src="${pokemon.sprites.front_default}" alt="Imagen del Pokémon">
          <ul>
            <li>Número: ${pokemon.id}</li>
            <li>Tipo: ${pokemon.types.map(function(type) { return type.type.name; }).join(', ')}</li>
            <li>Peso: ${pokemon.weight / 10} kg</li>
            <li>Altura: ${pokemon.height / 10} m</li>
          </ul>
        `;
        // Mostrar los datos del Pokémon en el contenedor
        pokemonData.html(template);
      },
      error: function() {
        // Mostrar un mensaje de error si la solicitud falla
        pokemonData.html('<p>No se encontró ningún Pokémon con ese nombre o número.</p>');
      }
    });
  });
});
