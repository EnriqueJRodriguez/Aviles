class Meteo{
constructor(){}

execute(){
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
    var referencia;
    data[0].prediccion.dia[0].estadoCielo.forEach(function(element){
      if(element.descripcion !== ""){
        estadoCielo = element.descripcion;
        if(estadoCielo.includes("Desp") | estadoCielo.includes("Sol") | estadoCielo.includes("sol")){
          referencia = "./multimedia/img/soleado.png";
        }
        if(estadoCielo.includes("Lluv") | estadoCielo.includes("Torm") | estadoCielo.includes("torm")
        | estadoCielo.includes("lluv")){
          referencia = "./multimedia/img/lluvia.png";
        }
        if(estadoCielo.includes("Nub") | estadoCielo.includes("nub")){
          referencia = "./multimedia/img/nublado.png";
        }
        if(estadoCielo.includes("Sol") & estadoCielo.includes("nub")){
          referencia = "./multimedia/img/solnubes.png";
        }
      }
    });
    var $tr = $('.meteo').append(  
    "<img src=\"" + referencia + "\" alt=\"Icono meteorologico\">" +
    "<p><b>" + estadoCielo + "</b></p>" +
    "<p>" + "Temperatura máxima: " + data[0].prediccion.dia[0].temperatura.maxima + " ºC" + "</p>" +
    "<p>" + "Temperatura mínima: " + data[0].prediccion.dia[0].temperatura.minima + " ºC" + "</p>" +
    "<p>" + "Humedad máxima: " + data[0].prediccion.dia[0].humedadRelativa.maxima + " %" + "</p>" +
    "<p>" + "Humedad mínima: " + data[0].prediccion.dia[0].humedadRelativa.minima + " %" +"</p>"
    ); 
  });
});
} 
}
var m = new Meteo();
m.execute();
