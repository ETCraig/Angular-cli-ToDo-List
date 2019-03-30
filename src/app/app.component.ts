import { Component } from '@angular/core';

import {AddingService} from './services/adding.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private addingService: AddingService) {
    
  }
}
