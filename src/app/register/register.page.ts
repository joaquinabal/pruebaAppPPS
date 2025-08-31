import { Component } from '@angular/core';
import { IonContent, IonCard, IonItem, IonInput, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password.validator';
import { SupabaseService } from '../services/supabase.service';
import { LoadingService } from '../services/loading.service';
import { ToastrService } from 'ngx-toastr'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonText, IonInput, IonItem, IonContent, IonCard, ReactiveFormsModule],
})
export class RegisterPage {

form!: FormGroup;
  isPwd = false;

  constructor(
     private supabaseService: SupabaseService,
    private toastr: ToastrService, // Inyecta el servicio de Toastr
    private loadingService: LoadingService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

   initForm() {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]]
      },
      {
        validators: passwordMatchValidator // Aplica el validador personalizado aquí
      }
    );

    // Suscribirse a los cambios de valor de los campos 'password' y 'confirmPassword'
this.form.get('password')?.valueChanges.subscribe(() => {
    this.form.get('confirmPassword')?.updateValueAndValidity({ onlySelf: true });
    });
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
    const { data, error } = await this.supabaseService.signUpUser(email, password);
    this.loadingService.ocultar();

    if (error) {
      let errorMessage = 'Error al registrarse.';
      this.toastr.error(errorMessage)
    } else {
      this.toastr.success("Registro completado.")
    }
  } catch (error: any) {
    this.toastr.error(error.message || 'Ocurrió un error inesperado al registrarse.', 'Error General');
    console.error('Error inesperado durante el registro:', error);
  }
}

get confirmPassword() {
  return this.form.get('confirmPassword');
}

get passwordMatchError() {
  return  this.form.errors?.['passwordMismatch'];
}

}
