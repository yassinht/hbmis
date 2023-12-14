import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  selectedLanguage: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    // Initialize selectedLanguage from localStorage or use a default language
    this.selectedLanguage =
      localStorage.getItem('selectedLanguage') || 'fr';

    // Set the selected language in the TranslateService
    this.translateService.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    // Implement logic to set the language in your application or perform translation-related actions
    // For example, you might emit an event or call a service to change the language globally in your app
  }
}
