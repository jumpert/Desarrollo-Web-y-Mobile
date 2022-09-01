# Unidad Temática 1 - ServWeb y HTTP

## Primeros pasos en servidores web

En la clase de hoy tuvimos como ya sabiamos la segunda instancia de verificación inicial de conocimientos (rats), en el cual considero que si bien la lectura no era muy complicada de asimilar, habian muchas cosas que asimilar y muy extensa para una prueba de verificacion de conocimientos que realmente tiene tanto impacto en la calificación final del curso. Esto como comentario ya que la lectura consistia en alrededor de 200 hojas de información en otro idioma (ingles), la cual debiamos no solo realizar, sino tambien asimilar en no más de 3 días.
Una posible solución para casos asi, si bien esta bueno tener un conocimiento profundo de los temas, en cuanto a como han evolucionado, como se han utilizado y demás, si el objetivo de la lectura es que el alumno aprenda algo especifico deberia marcarse los puntos criticos de lectura.

<img src= "https://user-images.githubusercontent.com/88668277/187924422-382b98a0-8668-4beb-9af7-34dfa3111b0e.png" height="350px" />

Respecto a la implementación del trabajo, estuvo bueno poder realizar ver como gestionar un servidor web a partir de la implementacion de DOCKER.
Para poder evaluar distintas cosas, como por ejemplo poder compartir la pagina que nosotros habiamos creado en las clases anteriores. Poder ver que ya no se cargaba desde el directorio local, sino que se podia hostear. 

<img src="https://user-images.githubusercontent.com/88668277/187925929-9e2cd503-675c-4ca6-a112-3c2c8453ba14.png" height="250px"/>
<img src="https://user-images.githubusercontent.com/88668277/187926510-4f6d78bf-82d7-4c2c-b48d-1c2c091e15ac.png"/>


## Llamadas a API's

En la clase de hoy lo que hicimos fue comenzar a ver como se realizan las distintas llamadas a las APIs, realizando las operaciones más básicas, GET y POST.
Para ver como es la construccion de los mensajes enviados a los servidores, y poder apreciar como es que funciona el tema de los request y los response.

<img src="https://user-images.githubusercontent.com/88668277/187928856-87d0a37b-fcc0-4122-b090-a42332cff41e.png" />

Tipos:<br>
--> XMLHTTPRequest trabaja con listeners <br>
--> fetch() trabaja con promesas

Para realizar esto utilizamos unas APIs que devuelven información básica de personas, como nombre, edad, etc.
+ https://randomuser.me/api
+ https://api.agify.io 
+ https://reqbin.com

<img src="https://user-images.githubusercontent.com/88668277/187930997-761fec30-21ce-490e-bf0d-2b4f7caf60e0.png" weigth="350px"/>
<img src="https://user-images.githubusercontent.com/88668277/187932644-a0c4c228-9da1-46bf-9b81-fa0071d40aa5.png" weigth="350px"/>
<img src="https://user-images.githubusercontent.com/88668277/187933063-15c04a00-21aa-4c4d-9c39-44c6a387d1c0.png" weigth="350px"/>


## Utilización de API OPEN METEO

Estuvimos trabajando las últimas 2 clases de la Unidad con la API OPEN METEO, para agregar a la App de notas que teniamos creada de clases anteriores el estado del tiempo de una determinada ciudad en una fecha indicada, consumiendo los servicios de la API.
Para conseguir lograr esto tuvimos que investigar mucho en la propia pagina de OPEN METEO, para ver que era lo que necesitaba para poder brindarnos la informacion a la cual nosotros queriamos acceder. Así como también investigar un poco sobre el manejo del archivo json, que es como se envian los datos.

<img src="https://user-images.githubusercontent.com/88668277/187935772-a17183ca-b75c-4f7f-9f45-8fa89fd5cbfb.png"/>

Luego de solucionar algunos inconvenientes con la aplicación de la información en la app de notas creadas tuvimos el siguiente avance:

<img src="https://user-images.githubusercontent.com/88668277/187935507-2d4b3cac-26de-45f7-aa6c-3021fe444007.png"/>

Si bien aun quedan cosas por mejorar, y cosas por probar seguramente en cuanto a la comunicación y consumo de información.

Otra de las cosas que realizamos fue poder gestionar un Mock, para poder utilizar nuestra app y ver como almacena los datos de las notas, para esto utilizamos informacion procedente de github. Donde de forma abierta y sin restricciones se nos indicaba como debiamos hacer, en DOCKER-JSON-SERVER.

<img src="https://user-images.githubusercontent.com/88668277/187936999-dc37ae7f-8e39-42e8-a85e-e1e30752ab7a.png"/>



