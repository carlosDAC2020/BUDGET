import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CuentaPuc, Periodo, Comprobante, Asiento } from '../models/contabilidad.model';

@Injectable({
  providedIn: 'root'
})
export class ContabilidadService {
  private baseUrl = '';

  constructor(private http: HttpClient) { }

  private getHeaders(schema: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
       'x-schema': schema
    });
  }

  // --- Cuentas PUC ---
  getCuentasPuc(schema: string): Observable<CuentaPuc[]> {
    return this.http.get<CuentaPuc[]>(`${this.baseUrl}/cuentas`, { headers: this.getHeaders(schema) });
  }

  createCuentaPuc(cuenta: Partial<CuentaPuc>, schema: string): Observable<CuentaPuc> {
    return this.http.post<CuentaPuc>(`${this.baseUrl}/cuentas`, cuenta, { headers: this.getHeaders(schema) });
  }

  updateCuentaPuc(cuenta: Partial<CuentaPuc>, schema: string): Observable<CuentaPuc> {
    return this.http.put<CuentaPuc>(`${this.baseUrl}/cuentas`, cuenta, { headers: this.getHeaders(schema) });
  }

  deactivateCuentaPuc(id_cuenta: number, schema: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/cuentas/desactivar`, { id_cuenta }, { headers: this.getHeaders(schema) });
  }

  // --- Periodos ---
  getPeriodos(schema: string): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(`${this.baseUrl}/periodos`, { headers: this.getHeaders(schema) });
  }

  createPeriodo(periodo: Partial<Periodo>, schema: string): Observable<Periodo> {
    return this.http.post<Periodo>(`${this.baseUrl}/periodos`, periodo, { headers: this.getHeaders(schema) });
  }

  closePeriodo(id_periodo: number, schema: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/periodos/cerrar`, { id_periodo }, { headers: this.getHeaders(schema) });
  }

  // --- Comprobantes ---
  getComprobantes(schema: string): Observable<Comprobante[]> {
    return this.http.get<Comprobante[]>(`${this.baseUrl}/comprobantes`, { headers: this.getHeaders(schema) });
  }

  getComprobanteById(id: string | number, schema: string): Observable<Comprobante> {
    return this.http.get<Comprobante>(`${this.baseUrl}/comprobantes/${id}`, { headers: this.getHeaders(schema) });
  }

  createComprobante(comprobante: Partial<Comprobante>, schema: string): Observable<Comprobante> {
    return this.http.post<Comprobante>(`${this.baseUrl}/comprobantes`, comprobante, { headers: this.getHeaders(schema) });
  }

  // --- Asientos ---
  createAsiento(asiento: Partial<Asiento>, schema: string): Observable<Asiento> {
    return this.http.post<Asiento>(`${this.baseUrl}/asientos`, asiento, { headers: this.getHeaders(schema) });
  }

  // --- Reportes ---
  getBalancePrueba(filtros: any, schema: string): Observable<any> {
    // Nota: Postman envía un GET con un "body". Técnicamente en GET HTTP no se envía body (usualmente se envían Query Params). 
    // Si el backend explícitamente pide un body en un GET, Angular HttpClient puede hacerlo mediante `request`, o se puede pasar un objeto config:
    return this.http.request('get', `${this.baseUrl}/reportes/balance-prueba`, {
      body: filtros,
      headers: this.getHeaders(schema)
    });
  }
}
