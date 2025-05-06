import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definir tipos para las categorías
type CategoryKey = 'animales' | 'paises' | 'alimentos' | 'deportes' | 'profesiones' | 'tecnologia' | 'peliculas';

interface CategoryData {
  displayName: string;
  words: string[];
}

type Categories = Record<CategoryKey, CategoryData>;

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  // Categorías de palabras con tipado correcto
  categories: Categories = {
    animales: {
      displayName: 'Animales',
      words: ['ELEFANTE', 'JIRAFA', 'TIGRE', 'LEON', 'COCODRILO', 'HIPOPOTAMO', 'RINOCERONTE', 'CEBRA', 'PINGUINO', 'DELFIN']
    },
    paises: {
      displayName: 'Países',
      words: ['ARGENTINA', 'MEXICO', 'COLOMBIA', 'ESPAÑA', 'BRASIL', 'FRANCIA', 'ALEMANIA', 'JAPON', 'AUSTRALIA', 'CANADA']
    },
    alimentos: {
      displayName: 'Alimentos',
      words: ['MANZANA', 'PLATANO', 'ZANAHORIA', 'TOMATE', 'ESPINACA', 'NARANJA', 'PIMIENTO', 'CEBOLLA', 'AGUACATE', 'SANDIA']
    },
    deportes: {
      displayName: 'Deportes',
      words: ['FUTBOL', 'BALONCESTO', 'TENIS', 'NATACION', 'ATLETISMO', 'CICLISMO', 'VOLEIBOL', 'BEISBOL', 'BOXEO', 'GIMNASIA']
    },
    profesiones: {
      displayName: 'Profesiones',
      words: ['MEDICO', 'PROFESOR', 'INGENIERO', 'ABOGADO', 'ARQUITECTO', 'BOMBERO', 'POLICIA', 'ENFERMERO', 'CONTADOR', 'PERIODISTA']
    },
    tecnologia: {
      displayName: 'Tecnología',
      words: ['COMPUTADORA', 'TELEFONO', 'INTERNET', 'ROBOT', 'SATELITE', 'PROGRAMA', 'ALGORITMO', 'SERVIDOR', 'PANTALLA', 'TECLADO']
    },
    peliculas: {
      displayName: 'Películas',
      words: ['TITANIC', 'AVATAR', 'MATRIX', 'GLADIADOR', 'INTERESTELAR', 'FROZEN', 'JOKER', 'COCO', 'AVENGERS', 'JURASSIC']
    }
  };
  
  categoryKeys: CategoryKey[] = Object.keys(this.categories) as CategoryKey[];
  selectedCategoryKey: CategoryKey = 'animales';
  lastChanceMessage: string = '';
  
  selectedWord: string = '';
  hiddenWord: string[] = [];
  guessedLetters: string[] = [];
  wrongLetters: string[] = [];
  attempts: number = 7;
  gameOver: boolean = false;
  gameWon: boolean = false;
  currentLetter: string = '';
  category: string = 'Animales';

  ngOnInit(): void {
    this.startGame();
  }

  selectCategory(categoryKey: CategoryKey): void {
    this.selectedCategoryKey = categoryKey;
    this.category = this.categories[categoryKey].displayName;
    this.startGame();
  }

  startGame(): void {
    // Select a random word from the current category
    const words = this.categories[this.selectedCategoryKey].words;
    this.selectedWord = words[Math.floor(Math.random() * words.length)];
    
    // Initialize the hidden word with underscores
    this.hiddenWord = Array(this.selectedWord.length).fill('_');
    
    // Reset game state
    this.guessedLetters = [];
    this.wrongLetters = [];
    this.attempts = 7;
    this.gameOver = false;
    this.gameWon = false;
    this.currentLetter = '';
  }

  guessLetter(): void {
    if (!this.currentLetter || this.gameOver || this.gameWon) return;
    
    const letter = this.currentLetter.toUpperCase();
    
    // Check if letter was already guessed
    if (this.guessedLetters.includes(letter)) {
      this.currentLetter = '';
      return;
    }
    
    this.guessedLetters.push(letter);
    
    // Check if the letter is in the word
    if (this.selectedWord.includes(letter)) {
      // Update hidden word
      for (let i = 0; i < this.selectedWord.length; i++) {
        if (this.selectedWord[i] === letter) {
          this.hiddenWord[i] = letter;
        }
      }
      
      // Check if the game is won
      if (!this.hiddenWord.includes('_')) {
        this.gameWon = true;
      }
    } else {
      // Wrong guess
      this.wrongLetters.push(letter);
      this.attempts--;
      
      if (this.attempts === 1) 
        this.lastChanceMessage = '¡Última oportunidad!';

      if (this.attempts === 0) {
        this.gameOver = true;
      }
    }
    
    this.currentLetter = '';
  }

  resetGame(): void {
    this.startGame();
  }

  getHangmanImage(): string {
    return `img/${0 + this.attempts}vidas.PNG`;
  }
}