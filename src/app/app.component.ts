import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { eyeOffOutline, eyeOutline, keyOutline, lockClosed, mailOutline } from 'ionicons/icons';import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/angular/standalone';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [ IonRouterOutlet,
    SideMenuComponent,
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,],
})
export class AppComponent {
  constructor() {
    addIcons({
      mailOutline,
      keyOutline,
      eyeOutline,
      eyeOffOutline,
      lockClosed
    })
  }
}
