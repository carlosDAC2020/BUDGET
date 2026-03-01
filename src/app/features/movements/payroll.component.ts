import { Component } from '@angular/core';

@Component({
    selector: 'app-payroll',
    standalone: true,
    template: `
    <div class="bg-white dark:bg-slate-900 p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
        <div class="size-20 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-4xl">payments</span>
        </div>
        <h3 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Nómina</h3>
        <p class="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Gestión de pagos a empleados y seguridad social. Esta sección estará disponible próximamente.</p>
    </div>
    `
})
export class PayrollComponent { }
