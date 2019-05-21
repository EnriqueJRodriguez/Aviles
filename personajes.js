$.getJSON( "./personajes.json", function( data ) {
    console.log(data);
    data.forEach( function(element){
        console.log(element);
        var $tr = $('.personajes').append(
            "<tr><td>" + element.nombre + "</td>" +
            "<td>" + element.ocupacion + "</td>" +
            "<td>" + element.cronologia + "</td></tr>"
        );
    }); 
});

/* $(function() {
    $.each(json, function(i, item) {
        console.log("Hey estoy en la iteracion: " + i);
        var $tr = $('.personajes').append(
            "<tr><td>" + json[i].nombre + "</td>" +
            "<td>" + json[i].ocupacion + "</td>" +
            "<td>" + json[i].cronologia + "</td></tr>"
        );
    });
}); */

$(function(){
    
});



