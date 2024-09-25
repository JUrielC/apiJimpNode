# apiJimpNode

apiJimpNode es una app backend desarrollada básicamente con Node js, Typescript y MySQL.
La API recibe una imagen a través de una solicitud en form-data y cuenta con tres rutas, por el momento, que realizan modificaciones a la imagen recibida, usando Jimp. 
Cuenta con dos usuarios predeterminados con fines de prueba, los cuales vienen insertados en la base de datos, cuya query está en la carpeta raíz del repositorio.
La edición de imágenes se lleva a cabo con usuarios validados a través de un token, los cuales pueden acceder a las rutas almacenadas localmente de las imágenes que han modificado

## Índice
- [Tecnologías](#tecnologías_principales)
- [Instalación](#instalación)
- [Uso](#uso)

## Tecnologías_principales

- **Node.js**: Para el entorno de ejecución.
- **TypeScript**: Para un desarrollo tipado.
- **Express**: Framework para construir la API.
- **Multer**: Para la subida de archivos.
- **TypeORM**: Para la interacción con la base de datos.
- **DotENV**: para el manejo de variables de entorno locales.
- **mysql2**: gestor de la base de datos.
- **jimp**: para la modificación de imagenes.
- **jsonwebtoken**: para generar tokens de usuarios.

## Instalación

Pasos para configurar el proyecto en una máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JUrielC/apiJimpNode

2. **Navegar a la carptea raíz:**
   ```bash
   cd nombre-del-proyecto

3. **Instalar dependencias:**
   ```bash
   npm install
   
4. **Compilar los archivos Typescript**
   ```bash
   npm run tsc

5. **Ejecutar el archivo index desde la carpeta raíz:**
   ```bash
   node build/index.js


## Uso

1. **Configurar variables de entorno de acuerdo al archivo .env.example que está en la carpeta raíz**

2. **Ruta para login:**
   Es necesario hacer un login para obtener un token que permita usar las demás funciones
   Los usarios predeterminados son 
   {
    "userName": "user0",
    "password": "pass0"
   }
   {
    "userName": "user1",
    "password": "pass1"
   }
   ```bash
   http://localhost:PUERTO/login/

3. **Rutas para uso de Jimp:**

  - **Ruta**:
   http://localhost:PUERTO/image/fisheye

   *Body*: 
   -Imagen (usando form-data)

   - **Ruta**:
   http://localhost:PUERTO/image/resize

      Body:
      -Imagen (usando form-data)
      -Width: 
         Key: width 
         Value: NUMERO ENTERO (Opcional)
      -Height: 
         Key: height 
         Value: NUMERO ENTERO (Opcional)

   
   - **Ruta**:
   http://localhost:PUERTO/image/rotate

      Body:
      -Imagen (usando form-data)
      -Rotate: 
         Key: rotate 
         Value: NUMERO ENTERO
   
     