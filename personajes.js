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