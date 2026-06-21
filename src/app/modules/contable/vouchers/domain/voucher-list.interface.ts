export interface VoucherItem {
  id_comprobante: number;
  numero: string;
  tipo_comprobante: string;
  factura_externa: string;
  fecha: string;
  estado: 'BORRADOR' | 'APROBADO' | 'ANULADO';
}