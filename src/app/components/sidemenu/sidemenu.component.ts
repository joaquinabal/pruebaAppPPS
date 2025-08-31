import { Component, OnInit } from '@angular/core';
import { createClient, User } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/services/supabase.service';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone'; 
import { CommonModule } from '@angular/common';


const supabase = createClient(
  'https://TU_PROYECTO.supabase.co',
  'TU_PUBLIC_ANON_KEY'
);

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    CommonModule
  ]

})
export class SideMenuComponent implements OnInit {
  isLoggedIn = false;
  user: User | null = null;

  constructor(
    private supabaseService: SupabaseService
  ){
    
  }

  async ngOnInit() {
    // Escuchar cambios de sesión
    this.supabaseService.escucharCambio(this.user, this.isLoggedIn)
  }

  async logout(){
    this,this.supabaseService.logout()
    this.isLoggedIn = false;
    this.user = null;
  }
}
