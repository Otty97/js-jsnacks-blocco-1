$(document).ready(function() {
  //Creare un triangolo con proprietà altezza e base
  var triangolo = {
    base: 20,
    altezza: 30
  };

  //Calocolare il perimetro [formula teoPitagora h^2 * b^2 = i^2]
  triangolo.ipotenusa = (triangolo.altezza**2 + triangolo.base**2)**.5;

  triangolo.perimetro = triangolo.base + triangolo.altezza + triangolo.ipotenusa;

  //Calocolare l'area
  triangolo.area = (triangolo.base * triangolo.altezza)/2;
  console.log(triangolo);


});
