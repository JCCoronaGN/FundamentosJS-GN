var numbers =[1,2,3,4,5];

var doubles = []
var doublesF = []
var doublesE = []
for (var i =0; i<numbers.length; i++){
    doubles.push(numbers[i]*2);
}

doublesF = numbers.map((x)=>x*2);
doublesE = numbers.map(function(x){return x*2}); 
console.log(numbers);
console.log("Con FOR: ",doubles);
console.log("Con Arrow funcion: ",doublesF);
console.log("Con funcion anonima: ",doublesE);

//Ejemplo de inmutabilidad

var car ={
    brand: "Nissan",
    model: "Sentra",
    year: 2020
}

console.log("Objeto car antes de llamar a addColor",car);
//Ejemplo de mutacion
function addColor(car){
    car.color = "Black";
    return car;
}

console.log("Objeto car antes de llamar a addColor",car);

//var sameCar = addColor(car);

// console.log("Objeto car despies de llamar a addColor",car);
// console.log("Objeto SameCar",sameCar);
// console.log("Same car ?", car===sameCar);

// Ejemplo de inmitabilidad

function addColorI(car) {
    var newCar = Object.assign({},car,{color: "Black"});

    var newCar = {
        ...car,
        color : "Black"
    }
    return newCar;
}

console.log("Objeto car antes de llamar a addColor)",car);

var sameCarI = addColorI(car);

console.log("Objeto car despies de llamar a addColorI",car);
console.log("Objeto SameCarI",sameCarI);
console.log("Same car ?", car===sameCarI);

// Caracteristicas de una funcion pura
/*
    1.. El valor retornado siempre es el mismo cuando se da el mismo valor de entrada
    2.- No dede producir side efects (efectos secundarios) 
*/

function randomNumber(value) {
    return Math.floor(Math.random()*10) * value;
}

console.log("Impura: ", randomNumber(2));

function doubleNumber(x) {
    return x*2;
}

console.log("Pura:", doubleNumber(2));

var cart = [{
    item: "Laptop",
    quantity: 1
    }
];

function addItemToCart(item, quantity) {
    cart.push({
        item:item,
        quantity:quantity
    })
}

function addItemToCart(cart, item, quantity){
    var newCart = cart.map(function(element){
        return element;
    })
    newCart.push({
        item:item,
        quantity:quantity
    })
    return newCart;
}

//Funcion de primera clase

var square = function (number) {
    return number * number;
}

var squareOfFour= square(4);
console.log(squareOfFour);

//Funcion de alto orden

// Input: 12345 -> 1+2+3+4+5 = 15

var number = 12345;
var string = number.toString(); // "12345"
var array = string.split("");   // ["1","2","3","4","5"]
console.log(number);
console.log(string);
console.log(array);

var arrayOfNumber = array.map(function(number){
    return Number(number);
})

var arrayOfNumber2 = array.map(Number);

console.log(arrayOfNumber);
console.log(arrayOfNumber2);

var suma = arrayOfNumber.reduce(function(prevousValue,currentValue) {
    return prevousValue + currentValue;
},0);
var suma2 = arrayOfNumber.reduce((prevousValue,currentValue)=> {
 return prevousValue + currentValue;
},0);


console.log(suma);
console.log(suma2);

var sumF = number
    .toString()
    .split("")
    .map(Number)
    .reduce((prevousValue,currentValue)=> {
    return prevousValue + currentValue;
    },0);

var sumF2 = number
    .toString()
    .split("")
    .reduce((prevousValue,currentValue)=> {
    return prevousValue + Number(currentValue);
    },0);

console.log(sumF);
console.log(sumF2);

var sumF3 = number
    .toString()
    .split("")
    .filter((x)=>Number(x)%2===0)
    .reduce((prevousValue,currentValue)=> {
    return prevousValue + Number(currentValue);
    },0);

console.log(sumF3);

function flatten(arrays) {
    return arrays.reduce(function(flat,current){
        return flat.concat(current);
    },[]);
  }
  
var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);
  
console.log(array); // [1, 2, 3, 4, 5, 6]

var dulces =["Krankyu","Carlos V","Skwinkles"];

var dulcesFavoritos = dulces.find(function(dulce) {
    var valor = dulce === "Skwinkles";
    return valor;
});

console.log(dulcesFavoritos);

var dulces= [
    {
        nombre: "Kranky",
        tipo : "Chocolate"
    },
    {
        nombre: "Kranky",
        tipo : "Chocolate"
    },
    {
        nombre: "Kranky",
        tipo : "Chocolate"
    }
]

// Ejemplo 

var peliculas = [];

function creaPelicula (nombre, imagen, des){
    var pelicula = {
        nombre,
        imagen,
        descripcion:des
    }
    return pelicula;
}

// Forma constructor
function Peliculas(nombre,imagen,des){
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = des;
}

function subirInfor(nombre, imagen, des){
    var nuevaPelicula = new Peliculas(nombre,imagen,des)
    peliculas.push(nuevaPelicula);
}

function subirInforPuro(peliculas, nombre, imagen, des){
    var nuevaPelicula = new Peliculas(nombre,imagen,des)
    var nuevasPeliculas = peliculas.map((pelicula)=>pelicula);
    nuevasPeliculas.push(nuevaPelicula);
    return nuevasPeliculas;
}

function mostrarInfor(){
    
}