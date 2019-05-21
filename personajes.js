var json = [];

$.getJSON( "./personajes.json", function( data ) {
    console.log(data);
    json = data; 
});

$(function() {
    $.each(json, function(i, item) {
        var $tr = $('.personajes').append(
            "<tr><td>" + json[i].nombre + "</td>" +
            "<td>" + json[i].ocupacion + "</td>" +
            "<td>" + json[i].cronologia + "</td></tr>"
        );
    });
});



