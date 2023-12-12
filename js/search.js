var customers = ['Jamie Dorito', 'Jane Smith', 'jaret Dorthy', 'Jeremy Domino', 'Jerry Doom', 'Jimmy Deer', 'John Doe', 'Johnanthy Dortha', 'Johnathen Doerd'];

// Inicialización de Typeahead.js
$('#searchInput').typeahead({
    source: customers,
    minLength: 1, // Número mínimo de caracteres para activar el autocompletado
    updater: function(item) {
        // Maneja la selección de un elemento del autocompletado
        window.location.href = 'new_repairs.html';
        return item;
    }
});

// perform Search when press button
function performSearch() {
    var searchValue = $('#searchInput').val().toLowerCase();
    
    if (searchValue.trim() === '') {       
        $('#searchMessage').show();
    } else {
       
        $('#searchMessage').hide();
        window.location.href = 'new_repairs.html';
    }
}



