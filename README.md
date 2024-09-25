# apiJimpNode

apiJimpNode es una app backend desarrollada básicamente con Node js, Typescript y MySQL.
La API recibe una imagen a través de una solicitud en form-data y cuenta con tres rutas, por el momento, que realizan modificaciones a la imagen recibida, usando Jimp. 
Cuenta con dos usuarios predeterminados con fines de prueba, los cuales vienen insertados en la base de datos, cuya query está en la carpeta raíz del repositorio.
La edición de imágenes se lleva a cabo con usuarios validados a través de un token, los cuales pueden acceder a las rutas almacenadas localmente de las imágenes que han modificado

## Índice
- [Tecnologías](#tecnologías_principales)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

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

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/nombre-del-proyecto.git

   cd nombre-del-proyecto

