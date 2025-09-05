import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  standalone: true, // Si usas standalone components
})
export class SplashScreenComponent {
  constructor(private router: Router) {
    // Escondemos el splash screen nativo cuando nuestro componente
    // está listo para mostrarse.
    SplashScreen.hide();

    // Después de un tiempo, navegamos a la página principal
    setTimeout(() => {
      this.router.navigate(['/']); // Navega a la ruta principal o a la que desees
    }, 3000); // Duración de la animación en milisegundos
  }
}