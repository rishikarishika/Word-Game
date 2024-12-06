import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  word: string="";
  displayWord: string[]=[];
  letters: string[]=[];
  guessedLetters: string[]=[];
  wrongGuesses: number=0;
  maxWrongGuesses: number=6;
  isGameOver: boolean=false;
  isGameWon: boolean=false;

  constructor() {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.maxWrongGuesses = 6;
    this.resetGame();
  }

  ngOnInit(): void {}

  guessLetter(letter: string): void {
    this.guessedLetters.push(letter);
    if (this.word.includes(letter)) {
      this.updateDisplayWord();
      this.checkWin();
    } else {
      this.wrongGuesses++;
      this.checkGameOver();
    }
  }

  updateDisplayWord(): void {
    this.displayWord = this.word.split('').map(letter => (this.guessedLetters.includes(letter) ? letter : '_'));
  }

  checkWin(): void {
    if (!this.displayWord.includes('_')) {
      this.isGameWon = true;
      this.isGameOver = true;
    }
  }

  checkGameOver(): void {
    if (this.wrongGuesses >= this.maxWrongGuesses) {
      this.isGameOver = true;
    }
  }

  resetGame(): void {
    const words = ['ANGULAR', 'COMPONENT', 'SERVICE', 'DIRECTIVE', 'MODULE'];
    this.word = words[Math.floor(Math.random() * words.length)];
    this.displayWord = Array(this.word.length).fill('_');
    this.guessedLetters = [];
    this.wrongGuesses = 0;
    this.isGameOver = false;
    this.isGameWon = false;
  }
}