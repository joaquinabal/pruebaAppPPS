import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { MenuController } from '@ionic/angular/standalone';


import { eyeOffOutline, eyeOutline, keyOutline, lockClosed, mailOutline } from 'ionicons/icons';import {
  IonApp,
  IonRouterOutlet,
  IonButtons,
  IonIcon,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonMenuButton
} from '@ionic/angular/standalone';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [ IonRouterOutlet,
    IonContent,
    IonTitle,
    IonMenuButton,
    IonToolbar,
    IonHeader,
    SideMenuComponent,
    IonApp,
    IonRouterOutlet,
  
    IonButtons,
  IonIcon],
})
export class AppComponent {

  isMenuOpen = false;

  constructor(private menu: MenuController) {
    addIcons({
      mailOutline,
      keyOutline,
      eyeOutline,
      eyeOffOutline,
      lockClosed
    });
  }

    openMenu() {
      this.menu.open();
  }
}
