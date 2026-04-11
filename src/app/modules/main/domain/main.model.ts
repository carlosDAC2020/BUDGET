export interface Budget {
    "fecha_ini": Date,
    "fecha_fin": Date,
    "anio": number,
    "total": number,
    "moneda": string,
    "is_active": boolean
}

export interface BudgetStats {
    "average": number,
    "projectionNextYear": number
}

export interface BudgetResponse {
  budgets: Budget[];
  stats: BudgetStats;
}