import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,  
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent {

  constructor(
    private router: Router
  ) {
    
  }

  irUsuario(idUsuario:string) {
    if(!idUsuario) {
      return;
    }

    this.router.navigate(['/usuario', idUsuario]);
  }

}
