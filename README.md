# Hero👨‍🚀-React⚛️

<h3>Ex I🚀</h3>
En este primer ejercicio, crearemos un componente que se encargará de renderizar una frase, y le importaremos y usaremos en el componente principal App.

Tienes que llevar a cabo los siguientes pasos:

1. Crear la carpeta componentes.

2. Crear la carpeta escena dentro de la carpeta componentes.

3. Dentro de la carpeta escena implementaremos el primer componente. Para ello debes crear el archivo Escena.js. Este primer componente sólo debe devolver el siguiente string:

"Our hero was floating through outer space when he spotted a spaceship in the distance"

4. Ya tenemos nuestro primer componente creado, pero todavía no se mostrará la frase. Para ello utilizaremos nuestro flamante componente Escena. En el return del componente app debes utilizar el componente Escena.

--------------------------------------------------------------------
<h3>Ex II🚀</h3>

¡GENIAL!, ya tienes el primer componente creado y funcionando. Por el momento sólo se muestra una frase, en este ejercicio haremos que se muestren todas las frases de la historia.

Para ello, debes llevar a cabo las siguientes tareas:

1. Leeremos los datos de un archivo JSON o JS, con los textos de la historia en el componente App:

[
"Our hero was floating through outer space when he spotted a spaceship in the distance,"
   "He was curious about the interior of the ship and began to inspect it. He came to a room with two doors.",
   "The hero decided to go through the door that led him home,"
   “Meanwhile, other heroes were not so lucky in their choice…”
]
1. Debe pasarse por cerca cada uno de los textos de la historia al componente Escena. (El componente escena renderizará una sola línea de texto).

2. Modificaremos el componente Escena para mostrar todas las líneas de texto obtenidas del componente padre App mediante props.
