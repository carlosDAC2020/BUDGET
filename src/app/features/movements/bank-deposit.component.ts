import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bank-deposit',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <!-- Top Status Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/60 dark:border-slate-700/60 shadow-sm transition-all hover:shadow-md">
            <div class="flex items-center gap-6">
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Movimiento No.</span>
                    <div class="flex items-center gap-2">
                        <span class="text-indigo-600 font-black text-xl tracking-tighter">CB-2026</span>
                        <span class="text-slate-300 dark:text-slate-600 font-light text-xl">/</span>
                        <span class="text-slate-900 dark:text-white font-black text-xl tracking-tighter">000156</span>
                    </div>
                </div>
                <div class="h-10 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado</span>
                    <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 mt-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span> Pendiente
                    </span>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="flex -space-x-2">
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm" title="Verificado: No">V</div>
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm" title="Bancario: Sí">B</div>
                </div>
                <button class="size-10 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all">
                    <span class="material-symbols-outlined">more_vert</span>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <!-- Main Form Section -->
            <div class="xl:col-span-3 space-y-8">
                <!-- Header Fields Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                    
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Fecha</label>
                        <input type="date" value="2026-01-27" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                    </div>
                    <div class="space-y-2 md:col-span-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Banco Destino</label>
                        <div class="relative group">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-indigo-600 transition-colors">account_balance</span>
                            <select class="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none appearance-none transition-all">
                                <option>Davivienda - Ahorros 4521</option>
                                <option>Bancolombia - Corriente 9012</option>
                            </select>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Doc. Externo No.</label>
                        <input type="text" placeholder="Número de volante" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                    </div>

                    <div class="space-y-2 md:col-span-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Concepto</label>
                        <input type="text" value="CONSIGNACIÓN RECAUDO DÍA" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Consignado por</label>
                        <input type="text" value="CAJERO PRINCIPAL" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Clasificación</label>
                        <select class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none appearance-none transition-all">
                            <option>Operativo</option>
                            <option>Administrativo</option>
                        </select>
                    </div>
                </div>

                <!-- Accounting Entries Table -->
                <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-indigo-50/30 dark:bg-indigo-900/10">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-indigo-600">receipt_long</span>
                            <h4 class="font-black text-lg text-slate-900 dark:text-white tracking-tight">Detalle Contable</h4>
                        </div>
                        <button class="px-4 py-2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20">
                            + Añadir Fila
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                    <th class="px-6 py-4">Cuenta</th>
                                    <th class="px-6 py-4">Concepto</th>
                                    <th class="px-6 py-4">Tercero</th>
                                    <th class="px-6 py-4 text-right">Débito</th>
                                    <th class="px-6 py-4 text-right">Crédito</th>
                                    <th class="px-6 py-4 text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr class="group hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors">
                                    <td class="px-6 py-5">
                                        <input type="text" value="111005 - Bancos" class="w-full bg-transparent border-none text-sm font-bold text-slate-700 dark:text-slate-200 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" value="Consignación efectivo" class="w-full bg-transparent border-none text-sm font-medium text-slate-500 dark:text-slate-400 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <span class="text-xs font-bold text-slate-600 dark:text-slate-400">900.887.112-4</span>
                                    </td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-indigo-600">$5,200,000</td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-900 dark:text-white">$0</td>
                                    <td class="px-6 py-5 text-center">
                                        <button class="text-slate-300 hover:text-red-500 transition-colors">
                                            <span class="material-symbols-outlined !text-xl">delete</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="group hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors">
                                    <td class="px-6 py-5">
                                        <input type="text" value="110505 - Caja General" class="w-full bg-transparent border-none text-sm font-bold text-slate-700 dark:text-slate-200 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" value="Traslado a bancos" class="w-full bg-transparent border-none text-sm font-medium text-slate-500 dark:text-slate-400 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <span class="text-xs font-bold text-slate-600 dark:text-slate-400">900.887.112-4</span>
                                    </td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-900 dark:text-white">$0</td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-indigo-600">$5,200,000</td>
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
                <!-- Totals Card -->
                <div class="bg-indigo-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                    <div class="relative z-10 space-y-6">
                        <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Resumen Bancario</h4>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-indigo-300">Total Débitos</span>
                                <span class="font-black">$5,200,000</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-indigo-300">Total Créditos</span>
                                <span class="font-black">$5,200,000</span>
                            </div>
                            <div class="h-px bg-white/10 my-2"></div>
                            <div class="flex justify-between items-end">
                                <div class="flex flex-col">
                                    <span class="text-[10px] font-black uppercase tracking-widest text-emerald-400">Balanceado</span>
                                    <span class="text-3xl font-black tracking-tighter leading-none">$0</span>
                                </div>
                                <span class="material-symbols-outlined text-emerald-400 text-4xl">account_balance_wallet</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -right-10 -bottom-10 size-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
                </div>

                <!-- Main Actions Grid -->
                <div class="grid grid-cols-2 gap-4">
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-indigo-600 mb-2 group-hover:scale-110 transition-transform">cloud_upload</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center uppercase">Contabilizar</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-indigo-600 mb-2 group-hover:scale-110 transition-transform">print</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center uppercase">Imprimir</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-indigo-600 mb-2 group-hover:scale-110 transition-transform">search</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center uppercase">Buscar</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-indigo-600 mb-2 group-hover:scale-110 transition-transform">content_copy</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center uppercase">Copiar</span>
                    </button>
                </div>

                <!-- Secondary Actions List -->
                <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-2 rounded-2xl border border-dashed border-indigo-200 dark:border-indigo-800">
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Detalle Contabilización <span class="material-symbols-outlined !text-sm">receipt_long</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all text-emerald-600">
                        Exportar a Excel <span class="material-symbols-outlined !text-sm">table_view</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-red-900/10 text-xs font-bold text-slate-500 transition-all">
                        Anular Consignación <span class="material-symbols-outlined !text-sm">delete_forever</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
})
export class BankDepositComponent { }
