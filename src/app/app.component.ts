import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-poc';
  showNavItems: boolean = false;
  public activeLang = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
    translate.use('es');
  }

  classToggle() {
    this.showNavItems = !this.showNavItems;
  }


}
