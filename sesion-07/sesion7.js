var link = document
    .body
    .getElementsByTagName("a");

var elementByClass = document
    .body
    .getElementsByClassName("main");


console.log(link);

console.log(elementByClass);

var paragraphs = document.body.getElementsByTagName("p");

console.log(paragraphs);

console.log(paragraphs[0]);
console.log(paragraphs[1]);

document.body.insertBefore(paragraphs[1],paragraphs[0])

var h2 = document.createElement("h2");
console.log(h2);
var text = document.createTextNode("Hello world from code !");
console.log(text);

h2.appendChild(text);
console.log(h2);
document.body.appendChild(h2);
//Ejemplo de atributos

var link = document.getElementById("link");

link.href ="http://google.com";
console.log(link);

//Ejemplo innerHTML

var elementDiv =document.createElement("div");
elementDiv.innerHTML=`
<p>Texto por aqui</p>
`
document.body.appendChild(elementDiv);



