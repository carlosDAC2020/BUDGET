export interface CuentaPuc {
  id_cuenta?: number;
  codigo: string;
  nombre: string;
  tipo: string;
  nivel: number;
  id_padre: number | null;
}

export interface Periodo {
  id_periodo?: number;
  anio: number;
  mes: number;
  fechaInicio: string; // formato string o Date
  fechaFin: string;
  cerrado: boolean;
}

export interface Comprobante {
  id_comprobante?: number;
  tipo: string;
  numero: string;
  fecha: string;
  descripcion: string;
  id_periodo: number;
  estado: string;
}

export interface Asiento {
  id_asiento?: number;
  id_comprobante: number;
  id_cuenta: number;
  id_tercero: number;
  id_centro: number;
  debe: number;
  haber: number;
  moneda: string;
  tasa: number;
}
