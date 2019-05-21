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
  $.getJSON( response.datos, function( data ) {
    var estadoCielo;
    console.log(data[0].prediccion.dia[0].estadoCielo);
    data[0].prediccion.dia[0].estadoCielo.forEach(function(element){
      if(element.descripcion !== ""){
        estadoCielo = element.descripcion;
      }
    });
    var $tr = $('.meteo').append(  
    "<p>" + estadoCielo + "</p>" +
    "<p>" + "Temperatura máxima: " + data[0].prediccion.dia[0].temperatura.maxima + "</p>" +
    "<p>" + "Temperatura mínima: " + data[0].prediccion.dia[0].temperatura.minima + "</p>" +
    "<p>" + "Humedad máxima: " + data[0].prediccion.dia[0].humedadRelativa.maxima + "</p>" +
    "<p>" + "Humedad mínima: " + data[0].prediccion.dia[0].humedadRelativa.minima + "</p>"
    ); 
  });
}); 
