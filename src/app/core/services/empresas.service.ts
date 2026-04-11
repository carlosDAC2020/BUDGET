import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private baseUrl = '';

  constructor(private http: HttpClient) { }

  /**
   * Genera los headers incluyendo dinámicamente el x-schema.
   */
  private getHeaders(schema: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-schema': schema
    });
  }

  // 1. Consultar listado general de empresas (requiere schema "core" usualmente)
  getEmpresas(schema: string): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl, {
      headers: this.getHeaders(schema)
    });
  }

  // 2. Crear nueva empresa
  createEmpresa(empresa: Partial<Empresa>, schema: string): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa, {
      headers: this.getHeaders(schema)
    });
  }

  // 3. Consultar empresa por ID
  getEmpresaById(id: string | number, schema: string): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/${id}`, {
      headers: this.getHeaders(schema)
    });
  }

  // 4. Actualizar empresa
  updateEmpresa(id: string | number, empresa: Partial<Empresa>, schema: string): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.baseUrl}/${id}`, empresa, {
      headers: this.getHeaders(schema)
    });
  }

  // 5. Desactivar empresa (status soft delete o inactivación)
  deactivateEmpresa(id: string | number, schema: string): Observable<any> {
    // Nota: El body va según lo que requiera el endpoint, en Postman iba null o vacío, aquí enviamos obeto vacío {}
    return this.http.patch(`${this.baseUrl}/${id}/status`, {}, {
      headers: this.getHeaders(schema)
    });
  }
}
