import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Rol, Modulo, Usuario } from '../models/seguridad.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  private baseUrl = environment.apiUrls.seguridad;

  constructor(private http: HttpClient) { }

  private getHeaders(schema: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
       'x-schema': schema
    });
  }

  // --- Roles ---
  getRoles(schema: string): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.baseUrl}/roles`, { headers: this.getHeaders(schema) });
  }

  createRol(rol: Partial<Rol>, schema: string): Observable<Rol> {
    return this.http.post<Rol>(`${this.baseUrl}/roles`, rol, { headers: this.getHeaders(schema) });
  }

  updateRol(rol: Partial<Rol>, schema: string): Observable<Rol> {
    return this.http.put<Rol>(`${this.baseUrl}/roles`, rol, { headers: this.getHeaders(schema) });
  }

  assignModulesToRol(rolId: string | number, moduleIds: (string | number)[], schema: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/roles/${rolId}/asign`, { moduleIds }, { headers: this.getHeaders(schema) });
  }

  getModulesByRol(rolId: string | number, schema: string): Observable<Modulo[]> {
    return this.http.get<Modulo[]>(`${this.baseUrl}/roles/${rolId}/modules`, { headers: this.getHeaders(schema) });
  }

  // --- Módulos ---
  getModulos(schema: string): Observable<Modulo[]> {
    return this.http.get<Modulo[]>(`${this.baseUrl}/module`, { headers: this.getHeaders(schema) });
  }

  createModulo(modulo: Partial<Modulo>, schema: string): Observable<Modulo> {
    return this.http.post<Modulo>(`${this.baseUrl}/module`, modulo, { headers: this.getHeaders(schema) });
  }

  updateModulo(modulo: Partial<Modulo>, schema: string): Observable<Modulo> {
    return this.http.put<Modulo>(`${this.baseUrl}/module`, modulo, { headers: this.getHeaders(schema) });
  }

  // --- Usuarios ---
  getUsuariosByEmpresa(empresaId: string | number, schema: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/empresa/${empresaId}/user`, { headers: this.getHeaders(schema) });
  }

  getUsuarioCognito(usuarioId: string | number, schema: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${usuarioId}/cognito`, { headers: this.getHeaders(schema) });
  }

  createUsuario(usuario: Partial<Usuario>, schema: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/user`, usuario, { headers: this.getHeaders(schema) });
  }

  updateUsuario(usuario: Partial<Usuario>, schema: string): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/user`, usuario, { headers: this.getHeaders(schema) });
  }
}
