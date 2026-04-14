export interface Account {
    id?: number,
    codigo: string,
    nombre: string,
    tipo: string,
    nivel: number,
    is_active: boolean,
    id_padre: number
}

export interface DesactiveAccount {
    id: number,
}