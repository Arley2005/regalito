function moverTexto(elemento) {
  var ancho = elemento.offsetWidth;
  var posicion = elemento.offsetLeft;
  var velocidad = 20;

  function animar() {
    posicion += velocidad;

    if (posicion >= ancho) {
      posicion = 0;
    }

    elemento.style.left = posicion + 'px';

    setTimeout(animar, 100);
  }

  animar();
}

var elemento = document.querySelector('.texto-movil');
moverTexto(elemento);
