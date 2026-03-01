import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-accounting-note',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <!-- Top Status Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/60 dark:border-slate-700/60 shadow-sm transition-all hover:shadow-md">
            <div class="flex items-center gap-6">
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Ajuste No.</span>
                    <div class="flex items-center gap-2">
                        <span class="text-violet-600 font-black text-xl tracking-tighter">NC-2026</span>
                        <span class="text-slate-300 dark:text-slate-600 font-light text-xl">/</span>
                        <span class="text-slate-900 dark:text-white font-black text-xl tracking-tighter">000524</span>
                    </div>
                </div>
                <div class="h-10 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado</span>
                    <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 mt-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"></span> Por Contabilizar
                    </span>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="flex -space-x-2">
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm" title="Anulado: No">A</div>
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm" title="Verificado: Sí">V</div>
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-violet-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm" title="Multi-propósito: Sí">M</div>
                </div>
                <button class="size-10 flex items-center justify-center text-slate-400 hover:text-violet-600 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all">
                    <span class="material-symbols-outlined">more_vert</span>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <!-- Main Form Section -->
            <div class="xl:col-span-3 space-y-8">
                <!-- Header Fields Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-violet-600"></div>
                    
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Fecha</label>
                        <input type="date" value="2026-01-27" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all" />
                    </div>
                    <div class="space-y-2 md:col-span-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Tercero General</label>
                        <div class="relative group">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-violet-600 transition-colors">supervised_user_circle</span>
                            <input type="text" placeholder="Buscar tercero..." value="VARIOS TERCEROS - AJUSTES" class="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Elaborado por</label>
                        <input type="text" value="SISTEMA CENTRAL" readonly class="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-500 dark:text-slate-400 outline-none cursor-not-allowed" />
                    </div>

                    <div class="space-y-2 md:col-span-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Concepto General</label>
                        <input type="text" value="AJUSTE POR DIFERENCIA EN CAMBIO - CIERRE MES" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Moneda</label>
                        <select class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-violet-500/20 outline-none appearance-none transition-all">
                            <option>COP</option>
                            <option>USD</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Clasificación</label>
                        <select class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-violet-500/20 outline-none appearance-none transition-all">
                            <option>Nota Contable</option>
                            <option>Ajuste Diferido</option>
                            <option>Nota de Ajuste</option>
                        </select>
                    </div>
                </div>

                <!-- Technical Accounting Table -->
                <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-violet-600">edit_note</span>
                            <h4 class="font-black text-lg text-slate-900 dark:text-white tracking-tight">Cruce de Cuentas</h4>
                        </div>
                        <button class="px-4 py-2 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/10">
                            + Fila PUC
                        </button>
                    </div>
                    <!-- Custom Scrollbar styling applied here -->
                    <div class="overflow-x-auto custom-scrollbar-premium">
                        <table class="w-full text-left border-collapse min-w-[1000px]">
                            <thead>
                                <tr class="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                    <th class="px-6 py-4">Cuenta</th>
                                    <th class="px-6 py-4">Concepto Detalle</th>
                                    <th class="px-6 py-4">Tercero</th>
                                    <th class="px-6 py-4 text-right">Débito</th>
                                    <th class="px-6 py-4 text-right">Crédito</th>
                                    <th class="px-6 py-4 text-center">Base Ret.</th>
                                    <th class="px-6 py-4 text-center">C. Costos</th>
                                    <th class="px-6 py-4 text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr class="group hover:bg-violet-50/30 dark:hover:bg-violet-900/10 transition-colors">
                                    <td class="px-6 py-5">
                                        <div class="flex flex-col">
                                            <input type="text" value="421005" class="bg-transparent border-none text-sm font-bold text-slate-800 dark:text-slate-200 outline-none w-20" />
                                            <span class="text-[10px] text-slate-400 font-medium tracking-tight">Ingresos Financieros</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" value="Ajuste diferencia en cambio" class="w-full bg-transparent border-none text-sm font-medium text-slate-500 dark:text-slate-400 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <span class="text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">890.342.123-1</span>
                                    </td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-800 dark:text-slate-200 group-hover:text-violet-600">$852,000</td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-900 dark:text-white">$0</td>
                                    <td class="px-6 py-5 text-center">
                                        <span class="text-xs text-slate-400 font-medium">--</span>
                                    </td>
                                    <td class="px-6 py-5 text-center">
                                        <span class="text-[10px] font-black text-slate-500 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 px-2 py-1 rounded">ADM-123</span>
                                    </td>
                                    <td class="px-6 py-5 text-center">
                                        <button class="text-slate-300 hover:text-red-500 transition-colors">
                                            <span class="material-symbols-outlined !text-xl">delete</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="group hover:bg-violet-50/30 dark:hover:bg-violet-900/10 transition-colors">
                                    <td class="px-6 py-5">
                                        <div class="flex flex-col">
                                            <input type="text" value="130505" class="bg-transparent border-none text-sm font-bold text-slate-800 dark:text-slate-200 outline-none w-20" />
                                            <span class="text-[10px] text-slate-400 font-medium tracking-tight">Cuentas por cobrar</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" value="Ajuste diferencia en cambio" class="w-full bg-transparent border-none text-sm font-medium text-slate-500 dark:text-slate-400 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <span class="text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">890.342.123-1</span>
                                    </td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-900 dark:text-white">$0</td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-800 dark:text-slate-200 group-hover:text-violet-600">$852,000</td>
                                    <td class="px-6 py-5 text-center">
                                        <span class="text-xs text-slate-400 font-medium">--</span>
                                    </td>
                                    <td class="px-6 py-5 text-center">
                                        <span class="text-[10px] font-black text-slate-500 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 px-2 py-1 rounded">ADM-123</span>
                                    </td>
                                    <td class="px-6 py-5 text-center">
                                        <button class="text-slate-300 hover:text-red-500 transition-colors">
                                            <span class="material-symbols-outlined !text-xl">delete</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Sidebar Actions & Totals -->
            <div class="space-y-8">
                <!-- Balance Totals Card -->
                <div class="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                    <div class="relative z-10 space-y-6">
                        <div class="flex items-center justify-between">
                            <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Consolidado</h4>
                            <span class="material-symbols-outlined text-violet-600">balance</span>
                        </div>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-slate-500">Total Débitos</span>
                                <span class="font-black text-slate-900 dark:text-white">$852,000</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-slate-500">Total Créditos</span>
                                <span class="font-black text-slate-900 dark:text-white">$852,000</span>
                            </div>
                            <div class="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
                            <div class="flex justify-between items-end">
                                <div class="flex flex-col">
                                    <span class="text-[10px] font-black uppercase tracking-widest text-emerald-500">Diferencia</span>
                                    <span class="text-3xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">$0</span>
                                </div>
                                <span class="text-[10px] font-black uppercase text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">Cuadrado</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Specialized Accountants Toolbar -->
                <div class="grid grid-cols-2 gap-4">
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-600 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-violet-600 mb-2 group-hover:scale-110 transition-transform">auto_fix_high</span>
                        <span class="text-[9px] font-black uppercase tracking-widest text-slate-500 text-center">Amortizar Diferidos</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-600 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-violet-600 mb-2 group-hover:scale-110 transition-transform">currency_exchange</span>
                        <span class="text-[9px] font-black uppercase tracking-widest text-slate-500 text-center">Dif. en Cambio</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-600 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-violet-600 mb-2 group-hover:scale-110 transition-transform">account_balance</span>
                        <span class="text-[9px] font-black uppercase tracking-widest text-slate-500 text-center">Imp. Bancario</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-600 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-violet-600 mb-2 group-hover:scale-110 transition-transform">calculate</span>
                        <span class="text-[9px] font-black uppercase tracking-widest text-slate-500 text-center">Prorrateo IVA</span>
                    </button>
                </div>

                <!-- Generic Actions List -->
                <div class="bg-slate-100/50 dark:bg-slate-800/30 p-2 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Imprimir Nota Contable <span class="material-symbols-outlined !text-sm text-violet-600">print</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Copia de Documento <span class="material-symbols-outlined !text-sm text-violet-600">content_copy</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/10 text-xs font-bold text-slate-500 transition-all text-emerald-600">
                        Exportar a Excel <span class="material-symbols-outlined !text-sm">table_view</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/10 text-xs font-bold text-slate-500 transition-all">
                        Anular Registro <span class="material-symbols-outlined !text-sm">delete_forever</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <style>
        .custom-scrollbar-premium::-webkit-scrollbar {
            height: 6px;
        }
        .custom-scrollbar-premium::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.05);
            border-radius: 10px;
        }
        .custom-scrollbar-premium::-webkit-scrollbar-thumb {
            background: rgba(124, 58, 237, 0.3);
            border-radius: 10px;
        }
        .custom-scrollbar-premium::-webkit-scrollbar-thumb:hover {
            background: rgba(124, 58, 237, 0.6);
        }
        .dark .custom-scrollbar-premium::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.2);
        }
        .dark .custom-scrollbar-premium::-webkit-scrollbar-thumb {
            background: rgba(167, 139, 250, 0.2);
        }
    </style>
    `
})
export class AccountingNoteComponent { }
