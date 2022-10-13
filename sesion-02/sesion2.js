let time = 28;
let greeting;

// Ejemplo control de flujo if

if (time < 12) {
    greeting = "Buenos días";
} else if (time < 20) {
    greeting = "Buenas tardes";
} else if (time >= 20 && time < 24) {
    greeting = "Buenas noches";
} else {
    greeting = "La hora no existe";
}

console.log(greeting);

// Ejemplo control de flujo switch

let day = 2;
let text;

switch (day) {
    case 0:
        text = "Domingo";
        break;
    case 1:
        text = "Lunes";
        break;
    case 2:
        text = "Martes";
        break;
    case 3:
        text = "Miercoles";
        break;
    case 4:
        text = "Jueves";
        break;
    case 5:
        text = "Viernes";
        break;
    case 6:
        text = "Sabado";
        break;
    default:
        text = "El dia no existe";
        break;
}

console.log(text);


// EJemplo, operador Ternario  message

let speed = 20;
let message;

if (speed>100) {
    message = "Vas muy rapido";
} else {
    message = " Estas debajo del limite";
}
console.log(speed>100 ? "Vas muy rapido" : "Estas debajo del limite");
console.log(message);

// Ejemplo - Truthy / Falsy

if ( [] ) {
    message = "Truthy";
} else {
    message = "Falsy";
} 

console.log(message);

// Ejemplo - Bucles (Ciclos)

for (let index = 0; index < 2; index++) {
    console.log("Hola mundo", index, index+1, "For");
}

let i = 0;
while (i < 2) {
    console.log("Hola Mundo", i, i+1, "While");
    i++;
}

for (let index = 0; index < 10; index++) {
    if (index % 2 == 0){
        console.log("El número ", index, " es par");
    }
}
let esPrimo= false;
for (let index = 1; index < 20; index++) {
    esPrimo = true;
    for (let index2 = 2; index2 <= index; index2++) {
        if(index==index2){
            continue;
        }
        if (index%index2==0){
            esPrimo=false
        }        
    }
    if(esPrimo){
        console.log(index, esPrimo)

    }

}