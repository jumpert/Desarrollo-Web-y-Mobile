function agregar() {
        
let val = document.getElementById("nuevo").value;
var node = document.createElement('li');
node.innerHTML = val;

document.querySelector('ul').appendChild(node);


}

function eliminar() {

}