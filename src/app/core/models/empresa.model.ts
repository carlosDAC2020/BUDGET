export interface Empresa {
  id?: string | number; // Normalmente lo provee la BD al crearse (opcional al crear)
  nit: string;
  nombre: string;
  schema_name: string;
  direccion?: string;
  telefono?: string;
  email?: string;
  moneda_base?: string;
  is_active?: boolean;
}
