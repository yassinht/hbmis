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
    // Set the selected language in the TranslateService
    this.translateService.setDefaultLang(language);

    // Update selectedLanguage and store it in localStorage
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
  }

}
