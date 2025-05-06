import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  words: string[] = ['ELEFANTE', 'JIRAFA', 'TIGRE', 'LEON', 'COCODRILO', 'HIPOPOTAMO', 'RINOCERONTE', 'CEBRA', 'PINGUINO', 'DELFIN'];
  selectedWord: string = '';
  hiddenWord: string[] = [];
  guessedLetters: string[] = [];
  wrongLetters: string[] = [];
  attempts: number = 5;
  gameOver: boolean = false;
  gameWon: boolean = false;
  currentLetter: string = '';
  category: string = 'Animales';

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    // Select a random word
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
    
    // Initialize the hidden word with underscores
    this.hiddenWord = Array(this.selectedWord.length).fill('_');
    
    // Reset game state
    this.guessedLetters = [];
    this.wrongLetters = [];
    this.attempts = 5;
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
      
      // Check if the game is over
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
    return `assets/hangman-${7 - this.attempts}.png`;
  }
}