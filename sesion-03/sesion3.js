function calculateAge(birthYear) {
    return 2022 - birthYear;
}

const result = calculateAge(1971);
console.log(result);
console.log(calculateAge("1996"));

function yearsUntilRetirement(year,name){
    let age = calculateAge(year);
    let retirement = 65 - age;
    console.log(name + " se retira en "+ retirement + " años");
    console.log(`${name} se retira en ${retirement} años.`)
}

yearsUntilRetirement(1971,"Juan");

function power(base,exponent) {
    let result = 1;
    for (let index = 0; index < exponent; index++) {
        //result = result * base; 
        result *= base
    }
    return result;
}

console.log(" 3^3 ",power(3,3));

var square = function(num) {
    return num * num;
}

console.log(square);
console.log(square(3));

var factorial = function fac(number){
    return number<2 ? 1 : number * fac(number-1);
}

console.log(factorial(5));

var myProfile = function(job, name){
    switch(job){
        case "developer":
            return `${name} develop cool apps.`;
            break;
        case "designer":
            return `${name} desgins awesome websites.`;
            break;
        default:
            return `${name} does somethings else.`;
           break;
                }
}

function myProfileCommon(job,name) {
    switch(job){
        case "developer":
            return `${name} develop cool apps.`;
            break;
        case "designer":
            return `${name} desgins awesome websites.`;
            break;
        default:
            return `${name} does somethings else.`;
           break;
                }
    
}

console.log(myProfile("developer","Marvin"));
console.log(myProfileCommon("designer","Lesly"));

function logName() {
    var name = "John Doe";
    console.log(name);
}

logName();

//Ejemplo de Expresión ejecutada inmediatamente

(function() {
    var name = "John Doe";
    console.log(name);    
})();

(function(name) {
    console.log(name);    
})("John Doe");

function fibonacci(num) {
    let result = num==0 ? [] : num == 1 ? [1]:[1,1];
    for (let index = 2; index < num; index++) {
        result.push(result[index-1]+result[index-2]);        
    }
    console.log(result);
}
fibonacci(20);

console.log((function(xx,yy){
    var cont = 0;
    var result = 0;
    while (cont<yy) {
        result += xx;
        cont++;
    }
    return result;
})(2,5))

var multiplicacion = (x,y) => x*y;
console.log(multiplicacion(3,4));

function calculadora(x,y,op) {
    switch (op) {
        case "suma":
            return x + y;
        case "multiplicacion":
            return x * y;
        case "division":
            return x / y;
        case "resta":
            return x - y ;
        default:
            console.log("Operaciòn invalida")
            break;
    }
}

console.log(calculadora(43,12,"suma"));

function calculadora2(x,y,operador){
    console.log(operador);
    return operador(x,y);
}

console.log(calculadora2(43,12,function(x,y){return x+y}));

console.log(calculadora2(43,12,(x,y) => x+y));

function saludoPersonalizado(nombre, saludo) {
    saludo(nombre);
}

saludoPersonalizado("Uriel",(nombre)=>{console.log("Hola "+nombre)});
saludoPersonalizado("Uriel", function(x){console.log("Adios "+ x)});

function multRecursia(x,y,resultado){
    //console.log(x,y,resultado);
    if(y==0){
        return resultado;
    }
    return multRecursia (x,y-1,resultado+x);
}

function multirec(x,y) {
    return multRecursia(x,y,0);
}

console.log(multRecursia(4,3,0));

console.log(multirec(4,3));
// 3 x 4 = 3 + (3x3)
// 3 x 3 = 3 + (3x2)
// 3 x 2 = 3 + (3x1)
// 3 x 1 = 3 + (3x0)

