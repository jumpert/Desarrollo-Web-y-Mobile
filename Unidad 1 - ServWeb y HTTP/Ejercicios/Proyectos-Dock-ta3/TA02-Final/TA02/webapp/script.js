{
    var darkModee = false;
}

//Funcion para activar modo nocturno desde el switch Desktop.
function Tog(){
    if(document.getElementById('flexSwitchCheckDefault').checked){
        DarkMode();
        document.getElementById('flexSwitchCheckDefault').check;
    }else{
        LightMode();
    }
}

//Funcion para activar modo nocturno desde el switch Mobile.
function Tog2(){
    if(document.getElementById('flexSwitchCheckDefault2').checked){
        DarkMode();
    }else{
        LightMode();
    }
}


//Cambia del modo
function ToggleDarkMode(value){
    darkModee = value;
    DarkModeVerifier();
}

//Verifica e implementa los modos
function DarkModeVerifier(){
    if (darkModee == false){
        LightMode();
    } else {
        DarkMode();
    }
}

//Activa el modo normal cambiando las clases de los elementos.
function LightMode(){
    let body = document.body;
    body.classList.remove("bg-dark");
    body.classList.add("bg-white");
    let cartas = document.getElementsByClassName("card");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove("bg-secondary");
        cartas[i].classList.add("bg-white");
        cartas[i].classList.remove("text-white");
        cartas[i].classList.add("text-dark");
    }
    let modales = document.getElementsByClassName("modal-content");
    for (let i = 0; i < modales.length; i++) {
        modales[i].classList.remove("bg-dark");
        modales[i].classList.add("bg-white");
        modales[i].classList.remove("text-white");
        modales[i].classList.add("text-dark");
    }
    let nav = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove("text-white");
        nav[i].classList.add("text-dark");
    }
    let nav2 = document.getElementsByClassName("navbar");
    for (let i = 0; i < nav2.length; i++) {
        nav2[i].classList.remove("bg-secondary");
        nav2[i].classList.add("bg-white");
    }
    document.getElementById('labelNocturno').classList.remove("text-white");
    document.getElementById('labelNocturno').classList.add("text-dark");
}

//Activa el modo nocturno cambiando las clases de cada elemento.
function DarkMode(){
    let body = document.body;
    body.classList.remove("bg-white");
    body.classList.add("bg-dark");
    let cartas = document.getElementsByClassName("card");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove("bg-white");
        cartas[i].classList.add("bg-secondary");
        cartas[i].classList.remove("text-dark");
        cartas[i].classList.add("text-white");
    }
    let modales = document.getElementsByClassName("modal-content");
    for (let i = 0; i < modales.length; i++) {
        modales[i].classList.remove("bg-white");
        modales[i].classList.add("bg-dark");
        modales[i].classList.remove("text-dark");
        modales[i].classList.add("text-white");
        
    }
    let nav = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove("text-dark");
        nav[i].classList.add("text-light");
    }
    let nav2 = document.getElementsByClassName("navbar");
    for (let i = 0; i < nav2.length; i++) {
        nav2[i].classList.remove("bg-white");
        nav2[i].classList.add("bg-secondary");
    }
    document.getElementById('labelNocturno').classList.remove("text-dark");
    document.getElementById('labelNocturno').classList.add("text-white");
}

//Eliminar modal, elimina un modal
function eliminarNotaModal(id) {
    let myModal = new bootstrap.Modal(document.getElementById('eliminarNotaModal'), {
        keyboard: false
    })
    myModal.show();
    document.getElementById('deleteOkButton').onclick = function(e){
        deleteTask(id);
      }
}

//Editar nota, carga la nota y la edita-
function editarNotaModal(id) {
    let myModal = new bootstrap.Modal(document.getElementById('editarNotaModal'), {
        keyboard: false
    })
    myModal.show();
    previaEditarTask(id);
    document.getElementById('EditarNotaBoton').onclick = function(e){
        let TextoNuevoNota = document.getElementById('InputTextoEditar').value;
        editarTask(id, TextoNuevoNota);
    }
}

//Agregar nota, muestra el modal de agregar nota y la carga si se presiona el boton de guardar.
function agregarNotaModal(city, date, time) {
    let myModal = new bootstrap.Modal(document.getElementById('agregarNotaModal'), {
        keyboard: false
    })
    myModal.show();
    document.getElementById('botonGuardarAgregarNota').onclick = function(e){
        let textNuevaNota = document.getElementById('TextoNuevaNota').value;
        let textoNuevaNotaTitulo = document.getElementById('TextoNuevaNotaTitulo').value;
        var textoNuevaNotatemperature = getWeather();
        var textoNuevaNotacity = document.getElementById("selectCity").value;
        var textoNuevaNotadate = document.getElementById("date").value;
        let idNota = Date.now();
        addCard(textoNuevaNotaTitulo, textNuevaNota,idNota,textoNuevaNotatemperature,textoNuevaNotacity,textoNuevaNotadate);
        postCard(textoNuevaNotaTitulo,textNuevaNota,idNota,textoNuevaNotatemperature,textoNuevaNotacity,textoNuevaNotadate);

        $('#agregarNotaModal').on('hidden.bs.modal', function (e) {
            $(this)
            .find("input,textarea,select")
                .val('')
                .end()
            .find("input[type=checkbox], input[type=radio]")
                .prop("checked", "")
                .end();
        });
    }
    document.getElementById('TextoNuevaNotaTitulo').value = "";
    document.getElementById('TextoNuevaNota').value = "";

    const keys = Object.keys(coordinates);
    
    const select = document.getElementById("selectCity");
    
    for(index in keys){
        select.options[select.options.length] = new Option(keys[index]);
    }
}

async function postCard(titulo,texto,id,temperatura,city,date){
    fetch('http://localhost/notas/', {
  method: 'POST',
  body: JSON.stringify({
    title: titulo,
    body: texto,
    id: id,
    temperature: temperatura,
    city: city,
    date: date
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

//Vista previa del texto de la nota, sirve para mostrar el texto de la nota en el modal de editar.
function previaEditarTask(id){
    cardsArray.forEach(card => {
        if (card.id == id) {
            document.getElementById('InputTextoEditar').value = card.description;
        }
    }
    );
}

//Editar nota
function editarTask(id, textoNuevo){
    cardsArray.forEach(card => {
        if (card.id == id) {
            card.description = textoNuevo;
        }
    }
    );
    renderCards();
}

//Eliminar nota
function deleteTask(id) {
    let idToDelete = id;
    cardsArray.forEach(card => {
        if (card.id == idToDelete) {
            cardsArray.splice(cardsArray.indexOf(card), 1);
        }
    }
    );
    renderCards();
    DarkModeVerifier();
}

//Notas preparadas
let cardsArray = [
    {
        id: 1,
        title: 'Nota 1',
        description: 'Este es un ejemplo de nota numero uno.',
    },
    {
        id: 2,
        title: 'Nota 2',
        description: 'Otro ejemplo de nota numero dos.'
    },
    {
        id: 3,
        title: 'Nota 3',
        description: 'Este es un ejemplo de nota numero tres. Un poquito mas larga que la anterior.'
    },
    {
        id: 4,
        title: 'Nota 4',
        description: 'Este es un ejemplo de nota numero cuatro.'
    },
    {
        id: 5,
        title: 'Nota 5',
        description: 'Este es un ejemplo de nota numero cinco.'
    },
    {
        id: 6,
        title: 'Nota 6',
        description: 'Este es un ejemplo de nota numero seis.'
    }
];

// Añadir nota
function addCard(title, description,id,temperatura,city,date) {
    cardsArray.push({
        id: id,
        title: title,
        description: description,
        city: city,
        date: date,
        temperature: temperatura
    });
    renderCards();
    DarkModeVerifier()
}

//Renderizar notas
function renderCards() {
    let htmlCardCode = ``;

    cardsArray.forEach(card => {
        htmlCardCode += ` 
        <article>
            <div class="container cards" id="card-id-${card.id}">
                <div class="card text-right" style="width: 18rem;">
                <h5 class="card-header text-center">${card.title}</h5>
                <div class="card-body" id="card-id-${card.id}"  onclick="editarNotaModal(${card.id})">
                    <p class="card-body card-text text-left">${card.description}</p>
                    <p class="card-body card-text text-left">${card.city}</p>
                    <p class="card-body card-text text-left">${card.date}</p>
                    <p class="card-body card-text text-left">${card.temperature}</p>
                </div>
                <div class="delete-button">
                    <button type="button" id="cardDelete" class="btn btn-danger rounded-pill " id="deleteCardButton" onclick="eliminarNotaModal(${card.id})">
                        <img src="./img/delete.png" id="cardDeleteIcon" alt="Delete">
                    </button>
                </div>
            </div>
        </article> `;
    });
    const cardsBody = document.querySelector(".cardsBody");
    cardsBody.innerHTML = htmlCardCode;
    DarkModeVerifier();
}