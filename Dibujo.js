var d = document.getElementById("Dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yf;
var colorcito = "red";
var cOlor = "orange";


  for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1) ;
dibujarLinea(colorcito, 0, yi, xf, 300);
console.log("Linea " + l);
}

dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);


for(l = 0; l < lineas; l++)
{
yi = 300 - 10 * l;
xf = 290 - 10 * l;
dibujarLinea(cOlor, 300, yi, xf, 0);
console.log("Linea " + l);
}
dibujarLinea(cOlor, 299,299,299,1);
dibujarLinea(cOlor, 1,1,299,1);




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}
