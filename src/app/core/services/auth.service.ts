import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  /**
   * Realiza la petición de login al backend.
   * @param credentials - Un objeto con email y password_raw.
   * @returns Un Observable con la respuesta del servidor (usuario y token).
   */
  login(credentials: { email: string, password_raw: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response && (response as any).token) {
          localStorage.setItem('authToken', (response as any).token);
        }
      })
    );
  }


  logout(): void {
    localStorage.removeItem('authToken');
  }

  /**
   * Verifica si el usuario está actualmente logueado.
   * @returns `true` si existe un token, `false` en caso contrario.
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  /**
   * Obtiene el token de autenticación guardado.
   * @returns El token como string, o `null` si no existe.
   */
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}