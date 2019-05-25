class Personajes{
constructor(){}
execute(){
    $.getJSON( "./personajes.json", function( data ) {
        data.forEach( function(element){
            var $tr = $('.personajes').append(
                "<tr><td>" + element.nombre + "</td>" +
                "<td>" + element.ocupacion + "</td>" +
                "<td>" + element.cronologia + "</td></tr>"
            );
        }); 
    });
}
}
var p = new Personajes();
p.execute();