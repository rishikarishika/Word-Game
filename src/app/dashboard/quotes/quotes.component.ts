import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  word: string = "";
  displayWord: string[] = [];
  letters: string[] = [];
  guessedLetters: string[] = [];
  wrongGuesses: number = 0;
  maxWrongGuesses: number = 0;
  isGameOver: boolean = false;
  isGameWon: boolean = false;
  quote: string = "";

  quotes: { quote: string, word: string }[] = [
    { quote: "I am short but live in water. People can't eat me. Say who I am.", word: "FISH" },
    { quote: "I have keys but can't open locks. What am I?", word: "PIANO" },
    { quote: "I speak without a mouth and hear without ears. What am I?", word: "ECHO" },
    { quote: "I can fly without wings. What am I?", word: "TIME" },
    { quote: "I am not alive, but I can grow. What am I?", word: "CRYSTAL" }
  ];

  constructor() {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.maxWrongGuesses = 5;
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
    const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.quote = randomQuote.quote;
    this.word = randomQuote.word;
    this.displayWord = Array(this.word.length).fill('_');
    this.guessedLetters = [];
    this.wrongGuesses = 0;
    this.isGameOver = false;
    this.isGameWon = false;
  }
}