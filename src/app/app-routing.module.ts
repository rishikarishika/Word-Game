import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrosswordComponent } from './dashboard/crossword/crossword.component';
import { QuotesComponent } from './dashboard/quotes/quotes.component';
import { WordSearchComponent } from './dashboard/word-search/word-search.component';
import { ScrambleComponent } from './dashboard/scramble/scramble.component';
import { HangmanComponent } from './dashboard/hangman/hangman.component';
import { WordLadderComponent } from './dashboard/word-ladder/word-ladder.component';
import { LoginComponent } from './dashboard/login/login.component';
import { GuessingwordComponent } from './dashboard/guessingword/guessingword.component';
import { LeaderBoardComponent } from './dashboard/leader-board/leader-board.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'crossword', component: CrosswordComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'word-search', component: WordSearchComponent },
  { path: 'scramble', component: ScrambleComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'word-ladder', component: WordLadderComponent },
  {path:'word-guessing-game',component: GuessingwordComponent},
  {path:'leader-board',component:LeaderBoardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }