import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-poc';
  showNavItems:boolean = false;

  constructor() {
  }

  classToggle() {
    this.showNavItems = !this.showNavItems;
  }
  

}
