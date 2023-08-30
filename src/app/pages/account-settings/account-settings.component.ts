import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  constructor(private settSerice: SettingsService) {}

  ngOnInit(): void {
    // para evitar llamar al DOM cada vez que se llame este método del servicio
    // se puede crear una propiedad del componente con los link y pasarsela
    // como parámeto a este método. De esa forma queda más optimo. 
    this.settSerice.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settSerice.changeTheme( theme );
  }
}
