import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  descripcion: string;
  stock: number;
  fechaAgregado: string;
  vendedor: string;
  comentarios: string[];
  enOferta: boolean;
}

interface Carrito{
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  vendedor: string;
  calificacion: number;
  enOferta: boolean;  
}
@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  productos: Producto[] = [
    {
      nombre: "Camara Profesional Canon",
      precio: 1200,
      imagen: "/img/prod1.jpg",
      categoria: "Electrónica",
      descripcion: "Camara profesional de alta calidad.",
      stock: 50,
      fechaAgregado: "2025-04-28",
      vendedor: "TechStore",
      comentarios: ["Excelente producto", "Muy buenas fotos!"],
      enOferta: false
    },
    {
      nombre: "Set de Maquillaje",
      precio: 200,
      imagen: "/img/prod2.jpg",
      categoria: "Maquillaje",
      descripcion: "Set muy completo de maquillaje.",
      stock: 7,
      fechaAgregado: "2024-10-18",
      vendedor: "Avon",
      comentarios: ["Buen producto", "Me encanta"],
      enOferta: true
    },
    {
      nombre: "Reloj marca Rolex",
      precio: 5000,
      imagen: "/img/prod3.jpg",
      categoria: "Joyeria",
      descripcion: "Reloj de lujo marca Rolex.",
      stock: 100,
      fechaAgregado: "2025-07-30",
      vendedor: "Rolex",
      comentarios: ["Excelente producto", "Muy elegante"],
      enOferta: false
    },
    {
      nombre: "Set Completo de Costura",
      precio: 50,
      imagen: "/img/prod4.jpg",
      categoria: "Hogar",
      descripcion: "Set completo de costura",
      stock: 20,
      fechaAgregado: "2023-01-12",
      vendedor: "SewingStore",
      comentarios: ["Excelente producto", "Muy útil"],
      enOferta: true
    },
    {
      nombre: "Auriculares Inalambricos",
      precio: 150,
      imagen: "/img/prod5.jpg",
      categoria: "Entretenimiento",
      descripcion: "Auriculares inalambricos de alta calidad.",
      stock: 30,
      fechaAgregado: "2025-03-15",
      vendedor: "AudioStore",
      comentarios: ["Excelente sonido", "Muy cómodos"],
      enOferta: false
    },
    {
      nombre: "Iphone 14 Pro",
      precio: 1200,
      imagen: "/img/prod6.jpg",
      categoria: "Electrónica",
      descripcion: "Iphone 14 Pro de 256GB.",
      stock: 50,
      fechaAgregado: "2025-04-28",
      vendedor: "Apple",
      comentarios: ["Excelente telefono", "Muy rápido"],
      enOferta: true
    },
    {
      nombre: "Reloj Inteligente",
      precio: 300,
      imagen: "/img/prod7.jpg",
      categoria: "Electrónica",
      descripcion: "Reloj inteligente con múltiples funciones.",
      stock: 13,
      fechaAgregado: "2025-12-8",
      vendedor: "SmartWatch",
      comentarios: ["Excelente reloj", "Muy útil"],
      enOferta: false
    },
    {
      nombre: "Joystick PS5",
      precio: 70,
      imagen: "/img/prod8.jpg",
      categoria: "Entretenimiento",
      descripcion: "Joystick para PS5, incluye cable de carga.",
      stock: 150,
      fechaAgregado: "2021-3-8",
      vendedor: "Panasonic",
      comentarios: ["Muy jugable", "Me encanta"],
      enOferta: true
    },
    {
      nombre: "Microfono de Estudio",
      precio: 200,
      imagen: "/img/prod9.jpg",
      categoria: "Electrónica",
      descripcion: "Microfono de estudio de alta calidad.",
      stock: 950,
      fechaAgregado: "2025-9-28",
      vendedor: "AudioStore",
      comentarios: ["Muy buen sonido", "Ideal para grabaciones"],
      enOferta: false
    }
  ]
  carrito: any[] = []; // Array para el carrito

  agregarAlCarrito(producto: Producto) {
    // Clonar el objeto para evitar modificaciones en el array original
    this.carrito.push({ ...producto });
    console.log('Producto agregado:', producto);
  }
  getTotal(): number {
    return this.carrito.reduce((acc, p) => acc + p.precio, 0);
  }
  
}
