export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'checkbox';
  required?: boolean;
  options?: { label: string; value: any }[];
  fullWidth?: boolean;
  hint?: string;
  defaultValue?: any;
  hidden?: boolean;
  colSpan?: number;
}

export interface SectionConfig {
  section: 'header' | 'detail' | 'footer';
  fields: FieldConfig[];
}

export interface Voucher {
    id_tipo:  number,
    numero: string,
    fecha: Date,
    descripcion: string,
    id_periodo: number,
    estado: boolean
}

export interface ListVoucher {
  id: number;
  Name: string;
  fac_ext: string;
  estado: string;
}