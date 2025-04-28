### Práctica Angular - Programación y Servicios Web

Este repositorio contiene la implementación de un trabajo práctico de Angular desarrollado como parte de la materia **Programación y Servicios Web** de la Facultad de Ingeniería en la Universidad Nacional de Jujuy. El objetivo principal es aplicar conceptos clave de Angular mediante la creación de componentes interactivos y funcionales. Este proyecto permite trabajar con tecnologías modernas y buenas prácticas en desarrollo web.

## Información General

- **Materia:** Programación y Servicios Web
- **Universidad:** Universidad Nacional de Jujuy
- **Facultad:** Facultad de Ingeniería
- **Estudiante:** Martín Alejandro Bonari
- **Profesores a Cargo:**

- Ing. Alfredo Rolando Espinoza
- Prof. X
- Prof. Y





## Objetivo del Trabajo Práctico

El objetivo principal del trabajo práctico es poner en práctica conceptos fundamentales del framework Angular, que incluyen:

- **Routing:** Implementación de navegación entre vistas mediante el uso de rutas.
- **Componentes:** Desglose de la aplicación en módulos reutilizables y funcionales.
- **Binding y Expresiones:** Uso de enlaces para conectar datos entre la vista y el controlador.
- **Directivas (ngFor, pipes, etc.):** Control dinámico de contenido en la vista.
- **Servicios (Services):** Uso obligatorio en el punto 3 para manejar la lógica y las operaciones centralizadas.
- **Bootstrap y CSS:** Estilización y diseño profesional de los componentes.
- **Integración general con Angular CLI.**


## Estructura del Trabajo Práctico

### **Punto 1: Slide Personalizado con Noticias**

- **Descripción:**

- Este componente muestra un carrusel dinámico que incluye noticias personalizadas. Cada noticia contiene un título, una descripción breve y una imagen asociada.
- El carrusel permite navegar entre las noticias utilizando botones de avance y retroceso.



- **Fuente de Datos:**

- Las noticias son almacenadas en un array de objetos definido en el controlador. Ejemplo:

```typescript
noticias = [
  { titulo: 'Noticia 1', descripcion: 'Descripción 1', img: 'noticia1.jpg' },
  { titulo: 'Noticia 2', descripcion: 'Descripción 2', img: 'noticia2.jpg' },
];
```





- **Estilo y Diseño:** Maquetado utilizando **Bootstrap CSS** para lograr una interfaz atractiva y responsiva.


### **Punto 2: Lista de Productos Destacados**

- **Descripción:**

- Muestra una lista en formato de *cards* con productos destacados. Cada producto incluye un nombre, descripción, precio e imagen asociada.
- Incluye un botón para "Agregar al carrito", que actualiza una lista de productos seleccionados. El carrito puede visualizarse en un **modal** junto con el cálculo del total.



- **Fuente de Datos:**

- Los productos se almacenan en un array predefinido. Ejemplo:

```typescript
productos = [
  { nombre: 'Monitor LG', descripcion: '14 pulgadas, HD', precio: 99, img: 'monitor.jpg' },
  { nombre: 'Notebook ASUS', descripcion: 'Disco SSD 128GB', precio: 200, img: 'notebook.jpg' },
];
```





- **Estilo y Diseño:** Uso intensivo de **Bootstrap y CSS** para estilizar las vistas de producto y el modal.


### **Punto 3: Juego del Ahorcado**

- **Descripción:**

- Este componente implementa el clásico **Juego del Ahorcado**. El usuario intenta adivinar una palabra seleccionada aleatoriamente de una lista predefinida.
- La categoría de las palabras (por ejemplo: Animales, Actores Argentinos) es visible en la pantalla.
- El estado del juego se muestra mediante imágenes que reflejan el progreso del "ahorcado".



- **Reglas del Juego:**

- El jugador tiene un número limitado de intentos (por ejemplo, 5).
- Cada letra correcta se guarda y se compara con la palabra objetivo.
- Si el jugador pierde (intentos = 0), se muestra un modal de derrota.
- Si el jugador gana, se felicita mediante un modal.



- **Fuente de Datos:**

- Las palabras se almacenan en un array. Ejemplo:

```typescript
palabras = ['Perro', 'Gato', 'Elefante', 'Caballo'];
```


- **Estilo y Diseño:** Se utilizan **Bootstrap**, **CSS** y **Services de Angular** para una arquitectura modular y dinámica.


## Tecnologías Utilizadas

- **Angular CLI:** Framework principal para el desarrollo de la aplicación.
- **HTML5:** Maquetación y estructura del contenido.
- **CSS3:** Estilización personalizada.
- **Bootstrap:** Diseño responsivo y componentes estilizados.
- **TypeScript:** Lógica y estructura del proyecto.
- **Node.js y npm:** Gestión de dependencias del proyecto.
- **Git:** Control de versiones.


## Ejecución del Proyecto

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. **Clona el repositorio:**

```shellscript
git clone https://github.com/martinmab2/TP3_Practica_Angular_PySW-2025.git
cd TP3_Practica_Angular_PySW-2025
```


2. **Instala las dependencias:**

```shellscript
npm install
```


3. **Ejecuta el servidor de desarrollo:**

```shellscript
ng serve
```


4. **Abre tu navegador y ve a:** `http://localhost:4200`


## Autor

- Martín Alejandro Bonari

