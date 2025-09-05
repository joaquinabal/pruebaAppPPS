import { Component } from '@angular/core';
import { IonContent, IonCard, IonItem, IonInput, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';
import { LoadingService } from '../services/loading.service';
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon, IonButton, IonText, IonInput, IonItem, IonContent, IonCard, ReactiveFormsModule],
})
export class HomePage {
  form!: FormGroup;
  isPwd = false;

  private testUsers = [
    { email: 'admin@admin.com.ar', password: 'admin1234' },
    { email: 'user1@mail.com', password: 'useruser' },
    { email: 'moderator@admin.com.ar', password: 'moderator1' },
  ];


  constructor(
     private supabaseService: SupabaseService,
    private toastr: ToastrService, // Inyecta el servicio de Toastr
    private loadingService: LoadingService,
    private router: Router
  ) {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  autoComplete(number: number) {
    const user = this.testUsers[number - 1];
    if (user) {
      this.form.patchValue({
        email: user.email,
        password: user.password
      });
    }
  }

  togglePwd() {
    this.isPwd = !this.isPwd;
  }



  async onSubmit() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    this.toastr.warning('Por favor, ingresa tus credenciales.', 'Campos Requeridos');
    return;
  }

  const { email, password } = this.form.value;

  try {
    this.loadingService.mostrar();
    const { data, error } = await this.supabaseService.signInUser(email, password);
    this.loadingService.ocultar();

    if (error) {
      console.log("error log")
      let errorMessage = 'Error al iniciar sesión.';
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Credenciales inválidas. Verifica tu correo y contraseña.';
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = 'Correo no confirmado. Revisa tu bandeja de entrada.';
      } else {
        errorMessage = error.message;
      }
      this.toastr.error(errorMessage, 'Error de Autenticación');
      return;
    } else {
      this.toastr.success("Has accedido!")
      this.router.navigate(['/home']);
    }
  } catch (error: any) {
    this.toastr.error(error.message || 'Ocurrió un error inesperado al iniciar sesión.', 'Error General');
    console.error('Error inesperado durante el login:', error);
  }
}
}
