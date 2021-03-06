import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { ParticipantsListComponent }   from './components/participantslist.component';
import { MatchesListComponent }   from './components/matcheslist.component';
import { BracketsComponent }   from './components/brackets.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,  
    ParticipantsListComponent, 
    MatchesListComponent,
    BracketsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
