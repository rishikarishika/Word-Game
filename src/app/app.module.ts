import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrosswordComponent } from './dashboard/crossword/crossword.component';
import { QuotesComponent } from './dashboard/quotes/quotes.component';
import { WordSearchComponent } from './dashboard/word-search/word-search.component';
import { ScrambleComponent } from './dashboard/scramble/scramble.component';
import { HangmanComponent } from './dashboard/hangman/hangman.component';
import { WordLadderComponent } from './dashboard/word-ladder/word-ladder.component';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './dashboard/login/login.component';
import { GuessingwordComponent } from './dashboard/guessingword/guessingword.component';
import { HeaderComponent } from './dashboard/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuessingwordComponent,
    CrosswordComponent,
    QuotesComponent,
    WordSearchComponent,
    ScrambleComponent,
    HangmanComponent,
    WordLadderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }