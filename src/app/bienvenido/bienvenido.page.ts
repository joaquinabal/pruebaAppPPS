import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BienvenidoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
