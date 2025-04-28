# TP3 Angular – Programación y Servicios Web

Este repositorio contiene la solución al Trabajo Práctico N°3 de la asignatura **Programación y Servicios Web** de la Facultad de Ingeniería, Universidad Nacional de Jujuy. El objetivo es aplicar conceptos fundamentales de Angular mediante el desarrollo de una aplicación web modular, interactiva y profesionalmente diseñada.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características Principales](#características-principales)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Autor y Contacto](#autor-y-contacto)

## Descripción General

El proyecto consiste en una aplicación Angular que integra múltiples componentes y funcionalidades, permitiendo al estudiante poner en práctica conceptos clave del framework, tales como enrutamiento, componentes, servicios, binding, directivas y estilización avanzada con Bootstrap.

## Características Principales

- **Routing:** Navegación fluida entre vistas mediante rutas configuradas.
- **Componentización:** División de la aplicación en módulos y componentes reutilizables.
- **Data Binding y Expresiones:** Sincronización eficiente entre la lógica y la interfaz.
- **Directivas Angular:** Uso de directivas estructurales y de atributos (ngFor, pipes, etc.).
- **Servicios:** Implementación de lógica centralizada y reutilizable, especialmente en el juego del ahorcado.
- **Estilización Profesional:** Interfaz responsiva y atractiva utilizando Bootstrap y CSS personalizado.
- **Integración con Angular CLI:** Estructura y comandos estándar para desarrollo y despliegue.

## Estructura del Proyecto

### 1. Carrusel de Noticias Personalizadas

- **Funcionalidad:** Carrusel dinámico que muestra noticias con título, descripción e imagen. Navegación mediante botones.
- **Datos:** Array de objetos en el controlador.
- **Estilo:** Bootstrap para diseño responsivo.

```typescript
noticias = [
  { titulo: 'Noticia 1', descripcion: 'Descripción 1', img: 'noticia1.jpg' },
  { titulo: 'Noticia 2', descripcion: 'Descripción 2', img: 'noticia2.jpg' },
];
```

### 2. Lista de Productos Destacados

- **Funcionalidad:** Cards de productos con nombre, descripción, precio e imagen. Botón para agregar al carrito y visualización en modal con total.
- **Datos:** Array predefinido de productos.
- **Estilo:** Bootstrap y CSS para cards y modal.

```typescript
productos = [
  { nombre: 'Monitor LG', descripcion: '14 pulgadas, HD', precio: 99, img: 'monitor.jpg' },
  { nombre: 'Notebook ASUS', descripcion: 'Disco SSD 128GB', precio: 200, img: 'notebook.jpg' },
];
```

### 3. Juego del Ahorcado

- **Funcionalidad:** Juego clásico con selección aleatoria de palabras y categorías, visualización de progreso e intentos, y modales de victoria/derrota.
- **Datos:** Array de palabras y categorías.
- **Reglas:** 5 intentos, comparación de letras, feedback visual y modal.
- **Estilo:** Bootstrap, CSS y servicios Angular.

```typescript
palabras = ['Perro', 'Gato', 'Elefante', 'Caballo'];
```

## Tecnologías Utilizadas

- **Angular CLI** – Framework principal.
- **HTML5** – Estructura de la aplicación.
- **CSS3** – Estilos personalizados.
- **Bootstrap** – Componentes y diseño responsivo.
- **TypeScript** – Lógica y tipado.
- **Node.js & npm** – Gestión de dependencias.
- **Git** – Control de versiones.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```shell
   git clone https://github.com/martinmab2/TP3_Practica_Angular_PySW-2025.git
   cd TP3_Practica_Angular_PySW-2025
   ```

2. **Instalar dependencias:**
   ```shell
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```shell
   ng serve
   ```

4. **Abrir en el navegador:**  
   Visita [http://localhost:4200](http://localhost:4200)

## Autor y Contacto

- **Estudiante:** Martín Alejandro Bonari
- **Profesores:**  
  - Ing. Alfredo Rolando Espinoza  
  - Prof. Angel Casasola  
  - Prof. Pablo Gudiño

Para consultas, sugerencias o reportes, contacta al autor a través del repositorio o los canales institucionales de la Facultad de Ingeniería.

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
