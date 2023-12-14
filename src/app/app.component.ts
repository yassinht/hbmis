import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hbmis';
  constructor(private translateService: TranslateService) {
    // Set the default language
    this.translateService.setDefaultLang('fr');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
