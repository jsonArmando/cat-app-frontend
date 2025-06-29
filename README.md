# Cat Explorer Frontend

![Cat Explorer App](https://i.imgur.com/your-screenshot-url.png) Bienvenido a Cat Explorer, una aplicación web desarrollada con Angular para explorar diferentes razas de gatos, ver sus detalles, imágenes y gestionar una cuenta de usuario.

## ✨ Características Principales

-   **Registro de Usuarios:** Creación de nuevas cuentas de usuario.
-   **Inicio de Sesión (Login):** Autenticación basada en tokens JWT.
-   **Rutas Protegidas:** Vistas como el explorador y el perfil solo son accesibles para usuarios autenticados.
-   **Explorador de Razas:** Visualiza una lista completa de razas de gatos con paginación y un filtro de búsqueda en tiempo real.
-   **Detalles de Raza:** Al seleccionar una raza, se muestra una vista detallada con su imagen, origen, temperamento y descripción.
-   **Vista de Perfil de Usuario:** Muestra la información del usuario actualmente logueado.
-   **Manejo de Errores:** La aplicación maneja errores del API (como 404 Not Found) y los muestra de forma amigable al usuario.
-   **Contenerización con Docker:** Incluye un `Dockerfile` para una fácil implementación y despliegue.

## 🚀 Tecnologías Utilizadas

-   **[Angular](https://angular.io/):** Framework principal para la construcción de la interfaz de usuario.
-   **[Angular Material](https://material.angular.io/):** Biblioteca de componentes de UI para un diseño moderno y consistente.
-   **[TypeScript](https://www.typescriptlang.org/):** Lenguaje de programación principal.
-   **[SCSS](https://sass-lang.com/):** Preprocesador de CSS para estilos más avanzados y organizados.
-   **[RxJS](https://rxjs.dev/):** Para la programación reactiva y el manejo de operaciones asíncronas.

## 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:
-   [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada)
-   [npm](https://www.npmjs.com/) (generalmente viene con Node.js)
-   [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## ⚙️ Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/cat-app-frontend.git](https://github.com/tu-usuario/cat-app-frontend.git)
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd cat-app-frontend
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    ng serve
    ```
5.  Abre tu navegador y ve a `http://localhost:4200/`.

**Nota:** Este frontend espera que el [proyecto backend](https://github.com/tu-usuario/cat-app-backend) esté corriendo en `http://localhost:3000`.

## 🐳 Despliegue con Docker

La aplicación está lista para ser contenerizada.

1.  **Asegúrate de tener Docker instalado y corriendo.**

2.  **Construye la imagen de Docker:**
    Desde la raíz del proyecto, ejecuta:
    ```bash
    docker build -t cat-app-frontend .
    ```

3.  **Ejecuta el contenedor:**
    ```bash
    docker run -p 8080:80 cat-app-frontend
    ```
4.  Ahora puedes acceder a la aplicación en tu navegador en `http://localhost:8080`.