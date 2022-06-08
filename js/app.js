
const boton = document.getElementById("mybtn");

boton.addEventListener("click", function(e){
document.getElementById("oculto").style.display = "block";
});
 
const _ = require('lodash');
const myArr = [1, 2, 3, 4, 5, 6 ,7 , 8];

console.log(_.chunk(myArr, 3));

