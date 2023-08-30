import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  get getMenu () {
    return [...this.menu];
  }

  private menu: any [] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', path: '/'},
        {title: 'Progress Bar', path: './progress'},
        {title: 'Graphics', path: './grafica-1'},
      ]
    }
  ]

  constructor() { }
}
