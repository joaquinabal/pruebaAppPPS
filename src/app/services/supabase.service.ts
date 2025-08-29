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

}