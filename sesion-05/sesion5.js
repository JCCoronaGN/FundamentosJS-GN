var john = {
    firstName : "John",
    birthYear: 1990,
    job: "Developer"
}

var jane = {
    firstName : "Jane",
    birthYear: 1989,
    job: "Designer"
}

var marie = {
    firstName : "Marie",
    birthYear: 1988,
    job: "Analyst"
}

var Person = function(name, year, job){
    this.firstName = name;
    this.birthYear = year;
    this.job = job;

}

class Person2 {
    constructor(name, year, job){
        this.firstName = name;
        this.birthYear = year;
        this.job = job;    
    }
}
var john = new Person("John",1990, "Developer");
var jane = new Person("Jane",1989, "Designer");
var marie = new Person("Marie",1988, "Analyst");

console.log(john);

var charles = new Person2("Charles",1971,"Tester");

console.log(charles);

var Vec = function(x,y){
    this.x = x;
    this.y = y;
    this.plus = function(otherVector){
        return new Vec(this.x+otherVector.x , this.y+otherVector.y);
    },
    this.minus = function(otherVector){
        return new Vec(this.x-otherVector.x , this.y-otherVector.y);        
    }
    this.distance = function(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}
var vec1 = new Vec(1,2);
var vec2 = new Vec(2,3);
var vec3 = vec1.plus(vec2);
console.log (vec1,vec2);
console.log (vec1.plus(vec2));
console.log(vec3);
console.log(vec1.distance());

var Person = function(name, year, job){
    this.firstName = name;
    this.birthYear = year;
    this.job = job;

}

var Developer = function(namex,skills, language){
    Person.call(this, namex);
    this.skills = skills;
    this.language = language;
}

var jaime = new Developer(
    "Jaime",
    ["Critical thinking","Analytisc"],
    "Python"
    );

console.log(jaime);

var Group = function() {
    this.members = []
    this.add = function(addmembers){
        this.members.push(addmembers);
    }
    this.has = function(seekMembers) {
        var has1 = false ; 
        for (let index = 0; index < this.members.length; index++) {
            has1= this.members[index]==seekMembers ? true:has1;
        }
        return has1;
    }
    this.createGroup = function(elementsArray) {
        var group = new Group();
         for (let index = 0; index < elementsArray.length; index++) {
             group.add(elementsArray[index]);
            
         }
        //group.add(elementsArray);
        return group;
    }
    this.searchElement = function(seekMembers){
        return this.members.some(element => element === seekMembers);
    }
}

var grupoNumeros = new Group();
console.log(grupoNumeros);
grupoNumeros.add(3);
console.log(grupoNumeros);
grupoNumeros.add(65);
console.log(grupoNumeros.has(65));
console.log(grupoNumeros.has(6));
console.log(grupoNumeros.has(3));
console.log(grupoNumeros.has(1));

var grupo2 = new Group();
grupo2.createGroup([1,2,3]);
console.log(grupo2.createGroup([1,2,3]));

console.log(grupoNumeros.searchElement(3));

Person.prototype.calculateAge = function() {
    var today = new Date();
    var year  = today.getFullYear();
    console.log (year- this.birthYear);
}

var Triangle = function(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.getArea2 = function() {
        var s = ((this.a+this.b+this.c)/2);
        var areaT = Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
        return areaT;    
    }
    this.getArea3 = () =>{
        var s = ((this.a+this.b+this.c)/2);
        var areaT = Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
        return areaT;
    }
    
};

Triangle.prototype.getPerimeter = function(){
        return this.a+this.b+this.c;
}
Triangle.prototype.getArea = function(){
    var s = ((this.a+this.b+this.c)/2);
    var areaT = Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
    return areaT;
}

var triangle = new Triangle(2,2,3);
console.log(triangle);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
console.log(triangle.getArea2());
console.log(triangle.getArea3());

var person ={
    name:"Uriel";
}

var Person = function(name){
    this.name = name
}