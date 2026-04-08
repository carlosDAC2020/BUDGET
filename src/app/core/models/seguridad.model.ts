export interface Rol {
  id?: number | string;
  nombre: string;
  descripcion: string;
}

export interface Modulo {
  id?: number | string;
  nombre: string;
  is_active: boolean;
}

export interface Usuario {
  id?: number | string;
  cognito_sub?: string;
  nombre: string;
  apellido: string;
  email: string;
  id_rol: number | string;
  id_empresa: number | string;
  is_active: boolean;
}
