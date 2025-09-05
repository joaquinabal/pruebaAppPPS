import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slpash',
  templateUrl: './slpash.page.html',
  styleUrls: ['./slpash.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class SlpashPage implements OnInit {

  constructor(public router: Router) {
  setTimeout(() => {
    this.router.navigateByUrl("login")
  },3500) ;
   }


  ngOnInit() {
  }

}
