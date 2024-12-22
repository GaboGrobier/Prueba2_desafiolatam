# Desafío - Despliegue Automatizado en ECS

Este proyecto implementa un pipeline CI/CD para automatizar el despliegue de una aplicación basada en Docker utilizando **Amazon ECS** y **GitHub Actions**.

## 🚀 Escenario

El equipo de desarrollo ha preparado una API basada en Docker para gestionar tareas de usuarios. Este pipeline se encarga de:
1. **Construir** una imagen Docker desde el código fuente.
2. **Subir** la imagen a un repositorio de contenedores (Amazon ECR).
3. **Desplegar** automáticamente la nueva imagen en un clúster ECS cada vez que se actualice el código.

## 📋 Requisitos del Proyecto

- **Clúster ECS** correctamente configurado con una tarea y un servicio operativos.  
- **Pipeline de GitHub Actions** funcional que automatice el flujo de CI/CD.  
- API accesible mediante un balanceador de carga.

## 🛠️ Configuración del Pipeline

El pipeline está configurado para realizar los siguientes pasos:

1. **Obtener el repositorio y configurar las credenciales de AWS.**
2. **Construir y etiquetar la imagen Docker.**
3. **Subir la imagen al repositorio Amazon ECR.**
4. **Rellenar la definición de tarea con la nueva imagen.**
5. **Registrar la definición de tarea en ECS.**
6. **Desplegar la nueva definición en un servicio ECS.**

## 🌐 Acceso a la API

La API es accesible mediante un balanceador de carga configurado en el servicio ECS. Obtén la URL del balanceador para interactuar con la API.

## ✅ Resultados Esperados

- La imagen Docker se construye y sube correctamente a Amazon ECR.
- El clúster ECS despliega la tarea utilizando la nueva definición.
- La API se actualiza automáticamente tras cada cambio en el código y es accesible públicamente.

## 📌 Recursos Opcionales

Si necesitas un punto de partida, puedes usar un repositorio inicial que contenga un `Dockerfile` con una aplicación base.

---

**Autor:** Gabriel Grobier Romo  
**Propósito:** Desplegar y automatizar aplicaciones en la nube utilizando servicios modernos de AWS y CI/CD.
