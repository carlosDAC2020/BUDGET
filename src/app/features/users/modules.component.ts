import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modules',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="space-y-8 py-8">
        <!-- Modules Table -->
        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                            <th class="px-6 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider tracking-tighter">Módulo</th>
                            <th class="px-6 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Descripción</th>
                            <th class="px-6 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Funcionalidades</th>
                            <th class="px-6 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estado</th>
                            <th class="px-6 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Acción</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                        <!-- Dashboard -->
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <span class="material-symbols-outlined">dashboard</span>
                                    </div>
                                    <span class="font-bold text-slate-800 dark:text-slate-200">Dashboard</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">Vista resumida y gráficos de rendimiento en tiempo real.</p>
                            </td>
                            <td class="px-6 py-5">
                                <div class="flex flex-wrap gap-1.5">
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Gráficos</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Reportes</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span> Activo
                                </span>
                            </td>
                            <td class="px-6 py-5 text-right">
                                <button class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-primary transition-colors focus:outline-none">
                                    <span class="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"></span>
                                </button>
                            </td>
                        </tr>
                        <!-- Movements -->
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                        <span class="material-symbols-outlined">sync_alt</span>
                                    </div>
                                    <span class="font-bold text-slate-800 dark:text-slate-200">Panel principal</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">Gestión integral de ingresos y egresos de caja.</p>
                            </td>
                            <td class="px-6 py-5">
                                <div class="flex flex-wrap gap-1.5">
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Crear</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Editar</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Exportar</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span> Activo
                                </span>
                            </td>
                            <td class="px-6 py-5 text-right">
                                <button class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-primary transition-colors focus:outline-none">
                                    <span class="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"></span>
                                </button>
                            </td>
                        </tr>
                        <!-- Budgets -->
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                        <span class="material-symbols-outlined">payments</span>
                                    </div>
                                    <span class="font-bold text-slate-800 dark:text-slate-200">Presupuestos</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">Control de límites mensuales y alertas automáticas.</p>
                            </td>
                            <td class="px-6 py-5">
                                <div class="flex flex-wrap gap-1.5">
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Límites</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Alertas</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span> Activo
                                </span>
                            </td>
                            <td class="px-6 py-5 text-right">
                                <button class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-primary transition-colors focus:outline-none">
                                    <span class="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"></span>
                                </button>
                            </td>
                        </tr>
                        <!-- Items/Inventory -->
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                                        <span class="material-symbols-outlined">inventory_2</span>
                                    </div>
                                    <span class="font-bold text-slate-800 dark:text-slate-200">Items</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">Inventario y categorización detallada de productos.</p>
                            </td>
                            <td class="px-6 py-5">
                                <div class="flex flex-wrap gap-1.5">
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Inventario</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Categorías</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                    <span class="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></span> Inactivo
                                </span>
                            </td>
                            <td class="px-6 py-5 text-right">
                                <button class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none border border-slate-300 dark:border-slate-600">
                                    <span class="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"></span>
                                </button>
                            </td>
                        </tr>
                        <!-- Users -->
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                                        <span class="material-symbols-outlined">group</span>
                                    </div>
                                    <span class="font-bold text-slate-800 dark:text-slate-200">Usuarios</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">Gestión de roles, invitaciones y auditoría de accesos Mal.</p>
                            </td>
                            <td class="px-6 py-5">
                                <div class="flex flex-wrap gap-1.5">
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Roles</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Invitaciones</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Auditoría</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span> Activo
                                </span>
                            </td>
                            <td class="px-6 py-5 text-right">
                                <button class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-primary transition-colors focus:outline-none">
                                    <span class="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"></span>
                                </button>
                            </td>
                        </tr>
                        <!-- Settings -->
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td class="px-6 py-5">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400">
                                        <span class="material-symbols-outlined">settings</span>
                                    </div>
                                    <span class="font-bold text-slate-800 dark:text-slate-200">Configuración</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">Localización, moneda del sistema y personalización de marca.</p>
                            </td>
                            <td class="px-6 py-5">
                                <div class="flex flex-wrap gap-1.5">
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Branding</span>
                                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded-md">Moneda</span>
                                </div>
                            </td>
                            <td class="px-6 py-5">
                                <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span> Activo
                                </span>
                            </td>
                            <td class="px-6 py-5 text-right">
                                <button class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-primary transition-colors focus:outline-none">
                                    <span class="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Footer Summary -->
        <div class="mt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-3 bg-white/50 dark:bg-slate-800/50 px-5 py-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                <span class="material-symbols-outlined !text-xl text-primary">info</span>
                <span class="text-xs font-medium">Se recomienda no desactivar el módulo de Usuarios ni Configuración en producción.</span>
            </div>
            <div class="flex items-center gap-4">
                <button class="px-6 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-xs uppercase tracking-widest">Cancelar</button>
                <button class="px-8 py-2.5 bg-primary text-white rounded-xl hover:opacity-90 transition-opacity font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20">Guardar Cambios</button>
            </div>
        </div>
    </div>
  `
})
export class ModulesComponent { }
