var miPrimerArreglo = [];

var miSegundoArrego = new Array();

var miTercerArreglo = [];

console.log(miPrimerArreglo);
console.log(miSegundoArrego);

console.log(miPrimerArreglo===miSegundoArrego);
console.log(miPrimerArreglo===miTercerArreglo);

var miPrimerArreglo = [1, "Jc", [0]];
console.log(miPrimerArreglo);
console.log(miPrimerArreglo[2][0]);

miPrimerArreglo.push(4);
//miPrimerArreglo[7]="hi";
console.log(miPrimerArreglo);

for (let index = 0; index < miPrimerArreglo.length; index++) {
    console.log("arreglo",miPrimerArreglo[index]);
}

function pushElement (arr, index, val){
    var arregloNuevo = [];
    for (let i = 0; i < arr.length; i++) {
        if(i===index){
            arregloNuevo.push(val);
        }
        arregloNuevo.push(arr[i]);
    }
    return arregloNuevo;
}

miPrimerArreglo = pushElement(miPrimerArreglo,1,"Corona");
console.log(miPrimerArreglo);

miPrimerArreglo.pop();
console.log(miPrimerArreglo);
console.log(miPrimerArreglo.splice(1,2));
console.log(miPrimerArreglo);

var pares = [2,4,6,8];

function regresaDobles(arr){
    var dobles = [];
    for (let index = 0; index < arr.length; index++) {
        dobles.push(arr[index]*2);
    }
    return dobles;
}

var dobles = regresaDobles(pares);

console.log(pares);
console.log(dobles);

var dobles = pares.map((x)=>x*2);
console.log(pares);
console.log(dobles);

var bandas = ["ACDC","Queen","Justin"];
var bandasCorregidas = bandas.filter((banda)=>banda!=="Justin");

console.log(bandas);
console.log(bandasCorregidas);

var tarea = {
    nombre : "Levantar Cuarto",
    status: false,
    saluda: function(){
        console.log("Hola");
    },
    nombres: ["JC", "CORONA"]

}

console.log(tarea["nombre"]);
console.log(tarea.status);
tarea.saluda();
console.log(tarea.nombres);

var color1 = "Red";
var color2 = "Blue";
var color3 = "Green";
console.log(color1,color2,color3);

var colors = [color1,color2,color3];
console.log("colors : ",colors);
color1 = "Magenta";
console.log("colors : ",colors);
var colors = ["Red","Blue","Green"];

colors[0] = "Yellow";
console.log("colors : ",colors);
console.log("Color 0 : ",colors[0]);
console.log("Color 4 : ",colors[4]);

colors.push("Brown");
console.log("colors : ",colors);

var cadena = "Hola";
console.log(cadena[0]);


function multiplyByTwo(numbersArray) {
    var multipledNumbers = [];
    for (let index = 0; index < numbersArray.length; index++) {
        multipledNumbers.push(numbersArray[index]*2);
    }
    return multipledNumbers;
}
console.log("Con funcion ",multiplyByTwo([1,2,3]));

console.log("Con funcion flecha ",[1,2,3].map(x=>x*2));

console.log("Con anonima",[1,2,3].map(function(x){return x*2}));

ages=[23,45,31,16,29];
function calculateAverage(agesArray){
    var sumaEdad = 0;
    for (let index = 0; index < agesArray.length; index++) {
        sumaEdad += agesArray[index];
    }
    return sumaEdad/agesArray.length;
}

console.log("Con funcion",calculateAverage(ages));

var calculateAverageAnon = function (agesArray){
    var sumaEdad = 0;
    for (let index = 0; index < agesArray.length; index++) {
        sumaEdad += agesArray[index];
    }
    return sumaEdad/agesArray.length;
}

console.log("Con funciona anonima",calculateAverageAnon(ages));

var calculateAverageAnon2 = (agesArray)=>{
    var sumaEdad = 0;
    for (let index = 0; index < agesArray.length; index++) {
        sumaEdad += agesArray[index];
    }
    return sumaEdad/agesArray.length;
};
console.log("Con funcion arrow",calculateAverageAnon2(ages));

// Objetos

var john = {
    firstName: "Juan",
    lastName: "Crown",
    birthYear: 1971,
    favoriteColors: ["Red","Green","Blue"],
    calculateAge: function(birthYear){
        var today = new Date();
        var year = today.getFullYear();
        return year - birthYear;
    },
    calculateAge2: function(){
        var today = new Date();
        var year = today.getFullYear();
        return year - this.birthYear;
    }
}

var functionArray = [function(){
    console.log("hola mundo, fuinciona desde un arreglo");
}]
functionArray[0];
functionArray[0]();


console.log(john);
console.log(john.lastName);
console.log(john["firstName"]);

console.log(john.calculateAge(john.birthYear));
console.log(john.calculateAge2());

// Ejemplo - convertir objeto a arreglo

var car ={
    "brand": "Nissan",
    model: "Versa",
    year:  2020
};

console.log(Object.keys(car));

function keyValuesPairs(obj) {
    var keys = Object.keys(obj);
    var pairs = [];
    for (let i = 0; i < keys.length; i++) {
        pairs.push([keys[i],obj[keys[i]]]);        
    }
    return pairs;
}
console.log(keyValuesPairs(car));

var people = [
    john,john
]

 console.log(people);

 var people = [
    john,{
        firstName: "Maria",
        lastName: "Doe"
    }
]
console.log(people);
