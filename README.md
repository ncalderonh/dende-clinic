# DENDE Clinic - Sistema de Registro de Usuarios

La clínica DENDE Spa necesita una aplicación para registrar nuevos usuarios y gestionar citas. Esta aplicación registra usuarios utilizando la API Random User, y almacena sus datos junto con un ID único y un timestamp.

## Descripción

Esta aplicación utiliza las siguientes tecnologías y paquetes:

- **Express**: Framework para crear el servidor web.
- **Axios**: Para realizar solicitudes HTTP a la API Random User.
- **UUID**: Para generar IDs únicos para cada usuario.
- **Moment**: Para formatear la fecha y hora de registro de los usuarios.
- **Lodash**: Para dividir el arreglo de usuarios por género.
- **Chalk**: Para imprimir información en la consola con colores.
- **Nodemon**: Para levantar el servidor en modo desarrollo y reiniciar automáticamente al detectar cambios.

## Instalación

1. Clona este repositorio en tu máquina local.
   ```sh
   git clone https://github.com/tu-usuario/dende-clinic.git
   
Visita http://localhost:3000/register para registrar un nuevo usuario.
Visita http://localhost:3000/users para ver la lista de usuarios registrados, divididos por género.
