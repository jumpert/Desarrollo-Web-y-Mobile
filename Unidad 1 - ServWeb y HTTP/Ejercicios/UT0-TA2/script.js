function agregar() {
        
let val = document.getElementById("block_notas").value;
var node = document.createElement('col');
node.innerHTML = val;

document.querySelector('ul').appendChild(node);


}

function eliminar() {

}

if(localStorage.getItem('theme') == 'dark') {
    setDarkMode();
    if (document.getElementById('checkbox').checked){
        localStorage.setItem('checkbox', true);
    }
}

function setDarkMode() {
    let isDark = document.body.classList.toggle('darkmode');
    if (isDark) {   
        setDarkMode.checked = true;
        localStorage.setItem('theme', 'dark');
        document.getElementById('checkbox').setAttribute('checked', 'checked');
    } else {
        setDarkMode.checked = true;
        localStorage.removeItem('theme', 'dark');
    }
}

const url = 'https://open-meteo.com/en/docs'

fetch(url)
    .then(response => response.json())
    .then(data => {
        let tiempo = document.getElementById("elem");
        tiempo.innerHTML = "<p>${data.latitude}</p>";
    })
    .catch(err => console.log(err))

    