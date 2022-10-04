# Unidad Temática 2 - JavaScript y Angular

## Primer acercamiento a las herramientas

<img src="https://user-images.githubusercontent.com/88668277/188721057-ecfd9a4f-9455-4434-bdb4-90dcda62b073.png" alt="Logo de JS, NodeJS y Angular"/>

Para la clase de hoy la preparación fue muy extensa, ya que las lecturas correspondían a algo así como 200 a 250 paginas para leer, de las cuales estaban muchas en inglés. Esto lo menciono porque es necesario poder hacer foco en lo principal de la unidad, en lugar de leer cosas solo por leer, porque al final leer más de 200 paginas solo para contestar 15 preguntas especificas y algunas capciosas, es cosa de locos.

En cuanto al desarrollo de la clase, se tomaron las pruebas rats como de costumbre al inicio de cada unidad, pero despues trabajamos instalando los ambientes de trabajo y desarrollo desde npm y node.js

<img src="https://user-images.githubusercontent.com/88668277/188721918-a4532c9d-9e27-47c1-9dde-fe8ee51daec1.png" alt="Logo de npm y NodeJS"/>

La combinación de estas 2 herramientas sumadas a las intrucciones brindadas en Angular, nos permiten desarrollar un código mucho más rico en cuanto a contenido, utilizando uno de los principales recursos dentro del mundo de la programación moderna, que es la reutilización de código.

Tomamos un tutorial desde la página principal de <a href="https://angular.io/tutorial" alt="Tutorial tour of heroes" target="_blank">Angular</a>, que nos permite ver como es que se utilizan los componentes y el mundo del diseño con Angular.

**Algunas de las capturas del proyecto terminado:**<br> solid
<img src="https://user-images.githubusercontent.com/88668277/188723293-3ada9c96-cc9c-4c44-b89b-b95090ad4119.jpg" width="600px"><br>
<img src="https://user-images.githubusercontent.com/88668277/188724299-add2ac0a-41da-4b79-809b-031c94735431.jpg" width="250px"> 
<img src="https://user-images.githubusercontent.com/88668277/188724886-7b9586da-38c2-4afe-9cd4-47200964a2d8.jpg" width="250px">
<img src="https://user-images.githubusercontent.com/88668277/188723489-26a11fe8-328e-4ace-b3b7-91ce4e9db19b.jpg" width="250px">
<img src="https://user-images.githubusercontent.com/88668277/188724486-87d7259c-2b6d-441c-ba48-cffe6deefa66.jpg" width="450px">


## Reconstruyendo la App de notas con Angular

En la clase de hoy, lo que hicimos fue dividirnos en sub-equipos para abordar la app de notas que habiamos construido en la UT pasada, pero esta vez viendola desde un punto de vista de los contenedores de que nos ofrece Angular.

Particularmente en nuestr sub-equipo, abordamos varias de las funcionalidades de la App, como lo son la NavBar, el toogle button de night-mode, así como tambien el boton agregar y el footer.

Lo bueno que se puede apreciar de este tipo de herramientas como angular, es poder dividir el trabajo en forma aislada, para que una vez que se tenga un sitio web, no sea necesario que se recargue constantemente toda la pagina, sino que pueda hacerse por bloques a necesidad, mientras que el resto permanece en cache. Esto nos ayuda a tener aplicaciones y sitios que tengan una mejor performance. En lo particular, esto me parece muy aprobechable para nuestro futuro como profesionales del area.

## Continuación de la App de Notas en Angular

La consigna de la clase de hoy fue poder unir y finalizar las tareas que veniamos haciendo para la propuesta de rediseñar la app, entre cada subequipo.

Cabe destacar que los trabajos que impone el realizar un ejercicio como este es muy complicado, ya que nuestra experiencia en este tipo de lenguaje y conocimiento de las herramientas se remonta a tan solo una clases. Agregando además que el tema no esta tan afianzado y claro, como para decir que existe una base solida en la cual poder seguir construyendo.

La operativa de trabajo esta buena, aunque el tener que hacer las cosas a ciegas practicamente, dificulta el aprendizaje y desalienta la capacidad de poder seguir con el trabajo. Esto lo menciono desde el punto de vista de que ponen un proyecto como este que sabe que no se puede sacar en 2 clases y que tiene un monton de trancas e implementaciones nuevas, que impiden tener pronto el trabajo a tiempo, lo que contradice el espiritu y entuciasmo de saber que pudimos lograrlo en tiempo y forma, lo que da aliento y esa sensación del deber cumplido que es un buen motivador.

Para comentar de nuestro trabajo, nos quedo pendiente el poder generar el modal para poder cargar las anotaciones en las tarjetas, aunque esto es algo que tiene un impacto negativo a la hora de poder utilizar la app, las bases para poder hacerlo ya estan prontas, solo resta poder unirlo con la logica del boton y ver que su comportamiento sea el esperado.


## Comienzo proyecto de Fake-Insta

La consigna basicamente es crear una app que tenga prestaciones como una red social, donde los usuarios puedan crear contenido en tipo comentarios o publicar fotos, e incluso tener un perfil donde poder gestionar todas sus actividades y publicaciones.

Lo primero que hicimos como equipo fue dividir el problema en partes como componentes y ver asi que cosas se podrian reutilizar en todo el proyecto cosa que nos ahorraria un monton de tiempo y trabajo, sin hablar que ayudaria a nuestra app en cuanto al funcionamiento y rendimiento.

Cosa destacable es decir que creimos muy ambicioso por parte de los profes este proyecto, porque pasar de gatear a andar corriendo o montando en bici, de una sin preambulo, parece un poco brusco de arranque. Pero bueno vamos haciendo de a poco a medida que podamos.

Yo en particular tome a cargo los componentes relacionados con la parte de chat, ya que vimos que no tenia otras cosas en relacion a la de mis compañeros cosas de no molestar el trabajo de otro, dependiendo de cosas que produjeran ellos o que yo tuviera que hacer para ellos.

<img src="https://user-images.githubusercontent.com/88668277/193936398-b48eca85-077f-463a-8f7e-f45cd575b836.png" width="450px">
<img src="https://user-images.githubusercontent.com/88668277/193937824-948796c7-b6ca-4150-b2d7-78db60725fa3.png" width="450px">

Así se veia inicialmente, pero era devido a que estaba muy hardcode en la clase, cosa que corregi en la siguiente clase...


## Continuación Fake-Insta

En la clase de hoy debiamos presentar las cosas que habiamos realizado cada uno, cuando llego mi turno, sin haber entendido más que lo básico de como utilizar angular, el profe me dijo que debia de mejorar lo que había hecho, que si bien tenia buena apariencia, estaba todo hardcode, lo que me hizo tener que que modificar gran parte de lo que habia hecho hasta ese entonces.

Con la implementacion de un mock ( que me permitiera guardar los mensajes entre 2 usuarios), un par de servicios de mensajerias, para chats y para listados de chat, pude finalmente terminar mi parte de este trabajo. si bien el resultado a simple vista era igual, la logic apor detras es totalmente distinta.

![image](https://user-images.githubusercontent.com/88668277/193937482-ad6c4721-f8bb-4909-8699-0ae33cd816f1.png)
![image](https://user-images.githubusercontent.com/88668277/193938497-ce4d768d-46c4-4ead-a24a-6568693c6b40.png)
![image](https://user-images.githubusercontent.com/88668277/193937540-bb39145c-718a-443c-a122-f6f8e0bc5e2f.png)
![image](https://user-images.githubusercontent.com/88668277/193937597-6474b91e-16a6-44df-b6f1-abf14033c561.png)
![image](https://user-images.githubusercontent.com/88668277/193937646-e7d8599a-adec-4035-96b2-146f62379d7b.png)
![image](https://user-images.githubusercontent.com/88668277/193937728-ec16cc90-9d6c-45a3-a0e7-72722524a817.png)
![image](https://user-images.githubusercontent.com/88668277/193937884-6e9f8b8b-cee8-47af-bfa6-e072668b6df0.png)
![image](https://user-images.githubusercontent.com/88668277/193937957-14cddc88-897b-4e4b-a848-71f0ecfd369d.png)


## Finalizción de proyecto

Para finalizar el proyecto, debimos de unir la app en cuanto a las partes que realizo cada uno. En esta parte tuvimos gran cantidad de problemas, ya que al trabajar tan divididos cuando quicimos unir todo, algo salio mal y una buena parte de la app no se pudo apreciar en la demostración.
Como final de esta conclución y reflexion, el gusto amargo en boca por no poder demostrar todo el trabajo que realizamos en conjunto como equipo.
