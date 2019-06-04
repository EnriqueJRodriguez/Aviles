class Mapa{
    constructor(){
        this.data=null;
        this.latitudes = null;
        this.longitudes = null;
        this.nombres = null;
    }

    readFile(){
        const self = this;
        $.ajax({
            url:'./turismo.xml',
            dataType: 'xml',
            success: function(datos){
                self.sacarDatos(datos);
                self.initMap();
            },
            error: function(){
                $('#mapa').text("Fallo en la lectura del mapa.")
            }
        });
    }

    sacarDatos(data){
        var latitudes = [];
        var longitudes = [];
        var nombres = [];
        $(data).find('coordenadasSitio').each(function(){
            latitudes.push($(this).find('latitud').text());
            longitudes.push($(this).find('longitud').text());
        });
        $('section h2').each(function(){
            nombres.push(this.innerText);
        });
        this.latitudes = latitudes;
        this.longitudes = longitudes;
        this.nombres = nombres;
    }

    initMap(){
        var centro = {lat: 43.556111, lng:-5.922222};
        var mapaPuntos = new google.maps.Map(document.getElementById('mapa'),{zoom: 12,center:centro});
        var i;
        for(i=0; i<this.latitudes.length; i++){
            var punto = {lat: parseFloat(this.latitudes[i]), lng: parseFloat(this.longitudes[i])};
            var marcador = new google.maps.Marker({position:punto,map:mapaPuntos,title:this.nombres[i]});
        }
    }
    
}

var g = new Mapa();