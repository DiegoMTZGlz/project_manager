## Proyecto Reto I. Desarrollar un Manejador de Proyectos

Web Platforms

## Unidad I

Introducción al Desarrollo Web

## Lenguaje de Programación

Javascript

Versión de node: v18.13.0

Versión de express: 4.16.1

# Autores

- **Daniel Josue Lozano Porras** - 348603 - [Daniel3486](https://gitlab.com/a348603)

- **Juan Antonio Díaz Fernández** - 348637 - [JUAN ANTONIO DIAZ FERNANDEZ](https://gitlab.com/a348637)

- **Jocelyn Soto Avila** - 348687 - [JOCELYN SOTO AVILA](https://gitlab.com/a348687)

- **Diego Martínez González** - 353198 - [DiegoMTZGlz](https://github.com/DiegoMTZGlz)

## Instrucciones

En esta publicación encontraras el documento que contiene el marco del proyecto a desarrollar durante el curso y tendrá valor en cada parcial según los criterios de evaluación. Toma en cuenta las siguientes cuestiones:

1. Selecciona tu equipo (el número de integrantes dependerá de lo acordado en clase).

2. Comprendan el documento adjunto y discutan entre los integrantes del equipo.

3. Sí existen dudas pregunten inmediatamente en la publicación o con el profesor en clase.

4. Al final de cada periodo existirá una tarea donde se deberá entregar los puntos a evaluar (uno por cada periodo).

5. Recuerda que se evalúa calidad del código, completitud del proyecto, funcionalidades, entrega a tiempo, participación de todo el equipo y correcta documentación y pruebas.

Para el primer parcial se evaluara lo siguiente:

1. Estructura del proyecto (20 puntos).

2. Diagrama de clases que cubra todos los requerimientos solicitados (20 puntos).

3. Todas las rutas necesarias para que el proyecto funcione con base al modelo REST y el diagrama de clases (20 puntos).

4. Diagrama de interacción que explique el flujo según los requerimientos. (20 puntos).

5. Imagen de docker funcional en docker hub (20 puntos).

Se espera como entregable la dirección del repositorio de gitlab con su respectivo archivo readme que explique los diagramas anteriores y que contenga la documentación del proyecto. Cada miembro del equipo debe subir la liga del repositorio.

## Funcionamiento



## Instrucciones de Usos

1. Clonar el repositorio:

```
git clone git@gitlab.com:webdeads/project-manager.git
```

2. Esribir el siguiente comando, esto hará que se instalen las dependencias de node, y el `package-lock.json`:

```
npm install
```

3. Para ejecutar el servidor:

```
npm start
```

4. Dirigirse a su buscardor de confianza y en la barra de navegación colocar:

```
http://localhost:3000/
```

5. Si se quiere apagar el servidor: `Ctrl + C`

## Imagen de Docker

Para ejectuarlo desde una imagen de docker

1. Descargar la imagen de docker:

```
docker pull docker pull diegomtzglz/project_manager
```

2. Crear el contenedor:

```
docker create --name <nombre_contenedor> -p 3000:3000 diegomtzglz/project_manager
```

3. Iniciar el contenedor:

```
docker start <nombre_contenedor>
```

4. Pausar el contenedor:

```
docker stop <nombre_contenedor>
```

Para hacer los ultimos comandos en uno solo:

```
docker run -p 3000:3000 diegomtzglz/project_manager
```

Link de DockerHub:

```
https://hub.docker.com/r/diegomtzglz/project_manager
```