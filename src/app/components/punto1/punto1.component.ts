import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Noticia{
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  categoria: string;
}
@Component({
  selector: 'app-punto1',
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  noticias: Noticia[] = [
    {
      titulo: "Nueva tecnología revoluciona la industria",
      descripcion: "Una innovadora tecnología promete transformar la forma en que trabajamos",
      imagen: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      fecha: "2025-04-28",
      categoria: "Tecnología"
    },
    {
      titulo: "Descubrimiento científico importante",
      descripcion: "Científicos logran un avance significativo en la investigación médica",
      imagen: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
      fecha: "2025-04-27",
      categoria: "Ciencia"
    },
    {
      titulo: "Evento deportivo mundial",
      descripcion: "El mayor evento deportivo del año comienza este fin de semana",
      imagen: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
      fecha: "2025-04-26",
      categoria: "Deportes"
    },
    {
      titulo: "Avances en Energía Renovable",
      descripcion: "Nueva planta solar establece récord de eficiencia energética",
      imagen: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      fecha: "2025-04-25",
      categoria: "Medio Ambiente"
    },
    {
      titulo: "Estreno Mundial de Película",
      descripcion: "La última entrega de la saga espacial rompe récords de taquilla",
      imagen: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
      fecha: "2025-04-24",
      categoria: "Entretenimiento"
    },
    {
      titulo: "Innovación en Educación",
      descripcion: "Universidades implementan nuevos sistemas de aprendizaje virtual",
      imagen: "https://images.pexels.com/photos/5427867/pexels-photo-5427867.jpeg",
      fecha: "2025-04-23",
      categoria: "Educación"
    },
    {
      titulo: "Descubrimiento Arqueológico",
      descripcion: "Encuentran antigua ciudad perdida en la selva amazónica",
      imagen: "https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg",
      fecha: "2025-04-22",
      categoria: "Historia"
    }
  ];
}
