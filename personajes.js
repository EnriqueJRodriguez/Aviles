var json;

$.getJSON( "./personajes.json", function( data ) {
    console.log(data);
    json = data; 
});

$(function() {
    $.each(json, function(i, item) {
        var $tr = $('.personajes').append(
            "<tr><td>" + item.nombre + "</td>" +
            "<td>" + item.ocupacion + "</td>" +
            "<td>" + item.cronologia + "</td></tr>"
        );
    });
});