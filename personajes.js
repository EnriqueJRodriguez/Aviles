var json = [{
    "nombre":"Pedro Menéndez de Avilés",
    "ocupacion":"Conquistador",
    "cronologia":"1519-1574"
   },
   {
    "nombre":"Juan Carreño Miranda",
    "ocupacion":"Pintor",
    "cronologia":"1614-1704"
   },
   {
    "nombre":"Felipe González Abarca",
    "ocupacion":"Obispo",
    "cronologia":"1765-1842"
   },
   {
    "nombre":"José Marría Menendéz",
    "ocupacion":"Terrateniente de la Patagonia",
    "cronologia":"1846-1918"
   },
   {
    "nombre":"Armando Palacio Valdés",
    "ocupacion":"Escritor",
    "cronologia":"1853-1938"
   },
   {
    "nombre":"Juan Ochoa y Betancourt",
    "ocupacion":"Escritor",
    "cronologia":"1864-1899"
   },
   {
    "nombre":"Yago Lamela",
    "ocupacion":"Atleta",
    "cronologia":"1977-2014"
   },
   {
    "nombre":"Enrique José Rodríguez",
    "ocupacion":"Piragüista y político",
    "cronologia":"1998-actualidad"
}];

$(function() {
    $.each(json, function(i, item) {
        var $tr = $('.personajes').append(
            "<tr><td>" + item.nombre + "</td>" +
            "<td>" + item.ocupacion + "</td>" +
            "<td>" + item.cronologia + "</td></tr>"
        );
    });
});