export interface Users {
  id?: number,
  cognito_sub: string,
  username: string,
  nombre: string,
  apellido: string,
  email: string,
  id_rol: number,
  id_empresa: number,
  password_hash: string,
  is_active: boolean,
  created_at: string,
}

export interface Role {
  id_rol: number;
  nombre: string;
  descripcion: string;
}

export interface managedRole {
  percentage: number;
  nombre: string;
  count: number;
}
