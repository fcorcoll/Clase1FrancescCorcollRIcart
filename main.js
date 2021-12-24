
//Pedimos por entrada de teclado el dato

let entrada = prompt ("Ingrese el numero :");

//Parseamos el dato para asegurarnos  que se trata de un dato numérico
let salida = Number(entrada);

if (salida < 10) {
    console.log ('El numero es inferior a 10')
    }

else if (salida >= 10){
    console.log ('El numero es superior a 10')
}

else {
    console.log('Lo siento en la tierra esto aun no es un dato numérico.')
}

//mostramos en un alert box el resultado con un string adicional.
alert ('Felicidades has decidido usar el num ' +salida )
