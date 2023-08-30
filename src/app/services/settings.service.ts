import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeElement = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') ?? './assets/css/colors/purple-dark.css';
    this.themeElement?.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.themeElement?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach( link => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme') ?? '';
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.themeElement?.getAttribute('href') ?? '';

      if(btnThemeUrl === currentTheme) {
        link.classList.add('working');
      }
    }); 
  }
}
