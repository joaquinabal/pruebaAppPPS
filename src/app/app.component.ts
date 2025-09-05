import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { MenuController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
  
import { eyeOffOutline, eyeOutline, keyOutline, lockClosed, mailOutline } from 'ionicons/icons';import {
  IonApp,
  IonRouterOutlet,
  IonButtons,
  IonIcon,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonMenuButton,

} from '@ionic/angular/standalone';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';
import { Platform } from '@ionic/angular';


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
    isShowingSplash = true;

  constructor(private menu: MenuController, private platform: Platform, public router: Router) {
    addIcons({
      mailOutline,
      keyOutline,
      eyeOutline,
      eyeOffOutline,
      lockClosed
    });

    this.initializeApp();
     // this.showSplash();
  }

  initializeApp(){
   this.platform.ready().then(()=> {
    this.router.navigateByUrl('slpash')
   }
  
  )
  }



    openMenu() {
      this.menu.open();
  } 

/*   async showSplash(){
      await SplashScreen.show({
        autoHide: true,
        showDuration: 2000
      })
    }*/

}
