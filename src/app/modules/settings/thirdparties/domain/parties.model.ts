export interface Party {
  id_tercero?: number,
  tipo_documento: string,
  numero_documento: string,
  nombre: string,
  direccion: string,
  telefono: string,
  email: string,
  is_active: boolean
}