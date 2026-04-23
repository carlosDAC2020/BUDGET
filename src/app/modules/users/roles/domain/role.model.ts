export interface ListRoles {
  id: number;
  nombre: string;
  descripcion: string;
  users_count: number;
}

export interface ListModules {
  id_mod: number;
  nombre: string;
  view: boolean;
  edit: boolean;
  make: boolean;
}

export interface Modules {
  idRol: number;
  idEmp: number;
}

export interface UpdateRoles {
  id?: number;
  name: string;
}

export interface subscription {
  idEmp: number;
}

export interface Roles {
  nombre: string;
  descripcion: string;
}