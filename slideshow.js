var nFotoActual = 0;
var maxFotos = 3;

function displayFoto(n) {
    n++;
    $('.slideshow img').hide();
    $('.slideshow :nth-child(' + n + ')').fadeIn();
    $('.bola').removeClass('activo');
    $('.bolas :nth-child(' + n + ')').addClass("activo");
}

$(function() {
    var nFotoActual = 0;
    var maxFotos = $('.slideshow img').length -1;
    $(".bola").each(function(n) {
        $(this).click(function() {
            nFotoActual = n;
            displayFoto(n);
        });
    });
    $('.slideshow img:gt(0)').hide();
    $('.bolas :first-child').addClass("activo");
    setInterval(function() {
        nFotoActual++;
        if (nFotoActual > maxFotos)
        if (nFotoActual >= maxFotos)
            nFotoActual = 0;
        displayFoto(nFotoActual);
    }, 6000);
});