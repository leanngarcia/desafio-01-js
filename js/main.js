let pesoRealBulto;
let largoBulto;
let anchoBulto;
let altoBulto;
let pesoRealPedido = 0;
let volumenBulto;
let volumenPedido = 0;
const costoKg = 5;
let costoEnvio;

/*solicito al usuario cuantos bultos desea despachar. valido que sea un número mayor a 0.*/

let cantBultos = parseInt(prompt("Ingrese la cantidad de bultos que desea despachar:"));

while (cantBultos <= 0 || isNaN(cantBultos)) {
  alert("Ingrese un número mayor a 0");
  cantBultos = parseInt(prompt("Ingrese el número de bultos que desea despachar"));
}

// imprimo en pantalla la cantidad de bultos cargados
console.log("cantidad de bultos a despachar: " + cantBultos);

// creo un ciclo for para cargar los datos de cada bultos al pedido total
for (let i = 0; i < cantBultos; i++) {
  // ingreso peso del bulto y sumo al pedido total
  pesoRealBulto = parseFloat(prompt("Ingrese el peso real del bulto nro." + (i + 1) + " en kg."));

  while (pesoRealBulto <= 0 || isNaN(pesoRealBulto)) {
    alert("Ingrese un número mayor a 0");
    pesoRealBulto = parseFloat(prompt("Ingrese el peso real del bulto nro." + (i + 1) + " en kg."));
  }

  console.log("Peso real del bulto " + (i + 1) + ": " + pesoRealBulto + " kg.");

  pesoRealPedido += pesoRealBulto;

  console.log("Peso Real del pedido: " + pesoRealPedido + " kg");

  //   ingreso medidas del bulto y las sumo al pedido total
  largoBulto = parseFloat(prompt("Ingreso el largo del bulto nro." + (i + 1) + " en cm."));

  while (largoBulto <= 0 || isNaN(largoBulto)) {
    alert("Ingrese un número mayor a 0");
    largoBulto = parseFloat(prompt("Ingreso el largo del bulto nro." + (i + 1) + " en cm."));
  }

  console.log("Largo del bulto nro " + (i + 1) + ": " + largoBulto + " cm");

  anchoBulto = parseFloat(prompt("Ingreso el ancho del bulto nro." + (i + 1) + " en cm."));

  while (anchoBulto <= 0 || isNaN(anchoBulto)) {
    alert("Ingrese un número mayor a 0");
    anchoBulto = parseFloat(prompt("Ingreso el ancho del bulto nro." + (i + 1) + " en cm."));
  }

  console.log("Ancho del bulto nro " + (i + 1) + ": " + anchoBulto + " cm");

  altoBulto = parseFloat(prompt("Ingreso el alto del bulto nro." + (i + 1) + " en cm."));

  while (altoBulto <= 0 || isNaN(altoBulto)) {
    alert("Ingrese un número mayor a 0");
    altoBulto = parseFloat(prompt("Ingreso el alto del bulto nro." + (i + 1) + " en cm."));
  }

  console.log("Alto del bulto nro " + (i + 1) + ": " + altoBulto + " cm");

  volumenBulto = (largoBulto * anchoBulto * altoBulto) / 1000000;

  console.log("Volúmen del bulto nro." + (i + 1) + ": " + volumenBulto + " m3");

  volumenPedido += volumenBulto;

  console.log("Volumen del pedido: " + volumenPedido + " m3");
}

// calculo peso volumetrico y comparo con peso real para calcular costo del envio

let pesoVolumetrico = (volumenPedido * 1000000) / 5000;

console.log("Peso volumétrico: " + pesoVolumetrico + " kg.");

if (pesoRealPedido >= pesoVolumetrico) {
  costoEnvio = pesoRealPedido * costoKg;
} else {
  costoEnvio = pesoVolumetrico * costoKg;
}

console.log("Costo del envio: $" + costoEnvio);

// alert con resumen del pedido y el costo

alert(`Detalles del pedido:

Peso real: ${pesoRealPedido} kg
Volúmen total: ${volumenPedido} m3
Peso volumétrico: ${pesoVolumetrico} kg

Costo x kg: $${costoKg}
COSTO TOTAL DEL ENVIO: $${costoEnvio} 
`);
