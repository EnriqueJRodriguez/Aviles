var json;
var output;

$.getJSON( "./personajes.json", function( data ) {
    console.log(data);
    json = data; 
});

$(function() {

    for(var i in json.personajes){
        output="<tr>";
        output+="<td>" + json.personajes[i].nombre + "</td>";
        output+="<td>" + json.personajes[i].ocupacion + "</td>";
        output+="<td>" + json.personajes[i].nombre + "</td>";
        output+="</tr>";
    }
    var $tr = $('.personajes').append(output);
    //$.each(json, function(i, item) {
    //    var $tr = $('.personajes').append(
    //        "<tr><td>" + item.nombre + "</td>" +
    //        "<td>" + item.ocupacion + "</td>" +
    //        "<td>" + item.cronologia + "</td></tr>"
    //    );
    //});
});



