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



