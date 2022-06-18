# CRUD-NodeJs-MongoDB

API Rest con NodeJS, utiliza las librerías de express para la creación y administración de rutas y mongodb que permite crear un cliente de base de datos y realizar la conexión y administración con MongoDB Atlas.

## Características.

- El sistema utiliza la librería de express para crear las rutas y el servidor.

- El sistema utiliza la librería de mongodb para interactuar con la base de datos NoSQL.

- El sistema realiza todas las operaciones de un CRUD mediante las peticiones get y post.

- El sistema cuenta con una capa Model, que se encarga de realizar la conexión con la base de datos de manera asíncrona mediante una promesa.

- Posteriormente el modelo se comunica con la capa de servicios que genera todas las funciones de la aplicación.

- Y finalmente existe un controlador que es el encargado de capturar cualquier excepción posible y conecta el servicio con el index de API Products.

## Instalación.

`git clone https://github.com/IgnacioRV23/CRUD-NodeJs-MongoDB.git`

`npm install`

`node index.js`

## Tecnologías.

Se utiliza nodeJS como entorno de ejecución.

Para almacenar los datos se utiliza una base de datos NoSQL.

La aplicación está programada en el lenguaje de programación javascript.

Se trabaja con la aplicación de Postman, para realizar las peticiones a las rutas.
