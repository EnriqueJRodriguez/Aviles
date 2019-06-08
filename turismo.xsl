<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/> 
    <xsl:template match="/">
        <html lang="es">
            <head>
                <title>Avilés</title>
				<link rel="stylesheet" type="text/css" href="style.css"/>
                <link rel="icon" type="image/ico" href="./favicon.ico" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1" /> 
                <script src="geolocalizacion.js"></script>
            </head>
            <body>
                <header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Escudo_de_Avil%C3%A9s.svg/1200px-Escudo_de_Avil%C3%A9s.svg.png" alt="Escudo de Aviles"/>
                    <!-- Imagen realizada por el usuario SAnchoPanzaXXI de wikipedia bajo licencia CC BY-SA 4.0 -->
                    <h1>Avilés</h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="cultura.html">Cultura</a></li>
                        <li><a href="historia.html">Historia</a></li>
                        <li><a href="deporte.html">Deporte</a></li>
                        <li><a class="seleccion">Turismo</a></li>
                    </ul>
                </nav>
                <h2><xsl:value-of select="pagina/titulo"/></h2>
                <p><b><xsl:value-of select="pagina/descripcion"/></b></p>
                <xsl:for-each select="pagina/puntos/punto">
                    <section>
                        <h2><xsl:value-of select="@nombre"/></h2>
					    <p><xsl:value-of select="descripcionSitio"/></p>
                        <h3>Coordenadas (latitud Norte y longitud Oeste):</h3>
                        <ul>
                            <li class="latitud"><xsl:value-of select="coordenadasSitio/latitud"/></li>
                            <li class="longitud"><xsl:value-of select="coordenadasSitio/longitud"/></li>
                        </ul>
                        <h3>Fotografías</h3>
                        <ul>
                            <xsl:for-each select="fotos/foto">
                                <xsl:variable name="href"><xsl:value-of select="."/></xsl:variable> 
                                <img src="{$href}" alt="Fotografia del punto. {$href}"/>
                            </xsl:for-each>
                        </ul>
                        <h3>Vídeos</h3>
                        <ul>
                            <xsl:for-each select="videos/video">
                                <video controls="controls">
                                    <xsl:variable name="src"><xsl:value-of select="."/></xsl:variable>
                                    <source src="{$src}" type="video/mp4"/>
                                </video>
                            </xsl:for-each>
                        </ul>
                        <h3>Curiosidades</h3>
                        <xsl:for-each select="curiosidades/curiosidad">
                            <p><xsl:value-of select="."/></p>
                        </xsl:for-each>
                        <h3>Noticias</h3>
                        <xsl:for-each select="noticias/noticia">
                            <p><xsl:value-of select="."/></p>
                        </xsl:for-each>
                        <h3>Locales próximos</h3>
                        <xsl:for-each select="locales/local">
                            <section class="local">
                                <p><b><xsl:value-of select="nombre"/></b></p>
                                <p><xsl:value-of select="tipo"/></p>
                                <p><xsl:value-of select="horario"/></p>
                                <p><xsl:value-of select="contacto"/></p>
                            </section>
                        </xsl:for-each>
                    </section>
                </xsl:for-each>
                <div id="mapa"></div>
                <footer>
                    <p>Página realizada por Enrique José Rodríguez Martín </p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/1024px-Copyleft.svg.png" alt="Logotipo Copyleft"/>
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>