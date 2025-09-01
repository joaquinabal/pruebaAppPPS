import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
import { Router } from '@angular/router';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonIcon,
  IonMenuToggle,
  IonItem,
  IonList
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
 imports: [CommonModule,IonList, IonItem, IonMenuToggle, IonIcon, IonLabel, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar],
})
export class SideMenuComponent implements OnInit {
  user: any = null;

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  ngOnInit() {
    // Suscribirse a los cambios de usuario
    this.supabaseService.user$.subscribe(user => {
      this.user = user;
    });
  }

  async logout() {
    await this.supabaseService.logout();
    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}