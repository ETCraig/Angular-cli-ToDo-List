import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { InputComponent } from './components/input/input.component';

import { AddingService } from './services/adding.service';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InputComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AddingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
