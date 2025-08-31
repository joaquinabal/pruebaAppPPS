                                                                                      import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabaseClient';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from './loading.service';

export type UserRole = 'paciente' | 'especialista' | 'administrador';

export interface Especialidad {
  id?: number; // Supabase suele asignar IDs automáticos
  nombre: string;
  // Puedes añadir otros campos si tu tabla los tiene, ej: descripcion: string;
}


  interface Disponibilidad {
  hora_inicio: string;
  hora_fin: string;
}

@Injectable({
  providedIn: 'root'
  
})
export class SupabaseService {
  public user$ = new BehaviorSubject<any>(null);

  constructor(private loadingService: LoadingService) {

     supabase.auth.onAuthStateChange((_event, session) => {
      this.user$.next(session?.user ?? null);
    });
  }
  
    async signInUser(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email, password });
  }

   async signUpUser(email: string, password: string) {
    return supabase.auth.signUp({
      email,
      password
    });
  }

  async escucharCambio(user: any, isLoggedIn: boolean){
    // Escuchar cambios de sesión
    supabase.auth.onAuthStateChange((_event, session) => {
      user = session?.user ?? null;
      isLoggedIn = !!user;
    });

    const { data } = await supabase.auth.getSession();
    user = data.session?.user ?? null;
    isLoggedIn = !! user;
  }

   async logout() {
    await supabase.auth.signOut();
  }

}