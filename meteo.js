// Composición de json en https://opendata.aemet.es/opendata/sh/efd141a4
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/33004/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbnJpcXVlanJvZHJpZ3Vlem1hcnRpbkBnbWFpbC5jb20iLCJqdGkiOiI0MmU5ZTk1Yi03NmU2LTQ2NmYtODk2Zi01MTZjZWM4ZDZjM2IiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU1ODQ1NzYzMiwidXNlcklkIjoiNDJlOWU5NWItNzZlNi00NjZmLTg5NmYtNTE2Y2VjOGQ2YzNiIiwicm9sZSI6IiJ9.AWkTxE5Do-aTyEAKrHMasBynJcFbLEHv9WvKNdJeqLk",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
  $.getJSON( response.datos, function( data ) {
      console.log(data);
      data.forEach( function(element){
        console.log(data);
        var $tr = $('.personajes').append(
        "<tr><td>" + element.nombre + "</td>" +
        "<td>" + element.ocupacion + "</td>" +
        "<td>" + element.cronologia + "</td></tr>"
      ); 
    });
  }); 
});