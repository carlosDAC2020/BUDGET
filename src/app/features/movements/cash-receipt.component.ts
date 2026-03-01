import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cash-receipt',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <!-- Top Status Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/60 dark:border-slate-700/60 shadow-sm transition-all hover:shadow-md">
            <div class="flex items-center gap-6">
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Recibo No.</span>
                    <div class="flex items-center gap-2">
                        <span class="text-emerald-600 font-black text-xl tracking-tighter">RC-2026</span>
                        <span class="text-slate-300 dark:text-slate-600 font-light text-xl">/</span>
                        <span class="text-slate-900 dark:text-white font-black text-xl tracking-tighter">000841</span>
                    </div>
                </div>
                <div class="h-10 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado</span>
                    <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mt-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Verificado
                    </span>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="flex -space-x-2">
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm" title="Anulado: No">A</div>
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm" title="Verificado: Sí">V</div>
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm" title="Impreso: Sí">I</div>
                </div>
                <button class="size-10 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all">
                    <span class="material-symbols-outlined">more_vert</span>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <!-- Main Form Section -->
            <div class="xl:col-span-3 space-y-8">
                <!-- Header Fields Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    
                    <div class="space-y-2 md:col-span-1">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Fecha Recibo</label>
                        <input type="date" value="2026-01-27" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                    </div>
                    <div class="space-y-2 md:col-span-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Recibido de (Cliente)</label>
                        <div class="relative group">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-emerald-600 transition-colors">person</span>
                            <input type="text" placeholder="Buscar cliente..." value="CONJUNTO RESIDENCIAL LOS ALPES" class="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Elaborado por</label>
                        <input type="text" value="CAJERO PRINCIPAL" readonly class="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-500 dark:text-slate-400 outline-none cursor-not-allowed" />
                    </div>

                    <div class="space-y-2 md:col-span-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Concepto</label>
                        <input type="text" value="PAGO ADMINISTRACIÓN - APTO 402" class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Caja / Recaudado en</label>
                        <select class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500/20 outline-none appearance-none">
                            <option>Caja General</option>
                            <option>Banco Davivienda - 4521</option>
                            <option>Caja Menor</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Moneda</label>
                        <select class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-emerald-500/20 outline-none appearance-none">
                            <option>COP</option>
                            <option>USD</option>
                        </select>
                    </div>
                </div>

                <!-- Accounting Entries Table -->
                <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-emerald-50/30 dark:bg-emerald-900/10">
                        <div class="flex items-center gap-6">
                            <button class="text-sm font-black text-emerald-600 border-b-2 border-emerald-600 pb-1">ASIENTOS</button>
                            <button class="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors pb-1">ESTADO DE CUENTA</button>
                        </div>
                        <button class="px-4 py-2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                            + Añadir Cuenta
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                    <th class="px-6 py-4">Cuenta</th>
                                    <th class="px-6 py-4">Concepto</th>
                                    <th class="px-6 py-4">Cheque/Ref</th>
                                    <th class="px-6 py-4">Banco</th>
                                    <th class="px-6 py-4 text-right">Débito</th>
                                    <th class="px-6 py-4 text-right">Crédito</th>
                                    <th class="px-6 py-4 text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr class="group hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors">
                                    <td class="px-6 py-5">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-bold text-slate-800 dark:text-slate-200">110505</span>
                                            <span class="text-[10px] text-slate-400 font-medium tracking-tight">Caja General</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" value="Ingreso por admón" class="w-full bg-transparent border-none text-sm font-medium text-slate-500 dark:text-slate-400 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" placeholder="--" class="w-24 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded text-xs border-none outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <span class="text-xs font-bold text-slate-400">EFECTIVO</span>
                                    </td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-emerald-600">$450,000</td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-900 dark:text-white">$0</td>
                                    <td class="px-6 py-5 text-center">
                                        <button class="text-slate-300 hover:text-red-500 transition-colors">
                                            <span class="material-symbols-outlined !text-xl">delete</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="group hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors">
                                    <td class="px-6 py-5">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-bold text-slate-800 dark:text-slate-200">130505</span>
                                            <span class="text-[10px] text-slate-400 font-medium tracking-tight">Clientes</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" value="Abono factura 452" class="w-full bg-transparent border-none text-sm font-medium text-slate-500 dark:text-slate-400 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" placeholder="--" class="w-24 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded text-xs border-none outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <span class="text-xs font-bold text-slate-400">--</span>
                                    </td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-slate-900 dark:text-white">$0</td>
                                    <td class="px-6 py-5 text-right font-black text-sm text-emerald-600">$450,000</td>
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
                <div class="bg-emerald-600 text-white p-8 rounded-3xl shadow-2xl shadow-emerald-600/30 relative overflow-hidden group">
                    <div class="relative z-10 space-y-6">
                        <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Balance Recibo</h4>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-white/70">Total Ingresos</span>
                                <span class="font-black">$450,000</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-white/70">Total Aplicado</span>
                                <span class="font-black">$450,000</span>
                            </div>
                            <div class="h-px bg-white/20 my-2"></div>
                            <div class="flex justify-between items-end">
                                <div class="flex flex-col">
                                    <span class="text-[10px] font-black uppercase tracking-widest text-emerald-200">Diferencia</span>
                                    <span class="text-3xl font-black tracking-tighter leading-none">$0</span>
                                </div>
                                <span class="material-symbols-outlined text-white text-4xl">check_circle</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -right-10 -bottom-10 size-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                </div>

                <!-- Main Actions Grid -->
                <div class="grid grid-cols-2 gap-4">
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-emerald-600 mb-2 group-hover:scale-110 transition-transform">print</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Imprimir Recibo</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-emerald-600 mb-2 group-hover:scale-110 transition-transform">confirmation_number</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Imprimir Tiquete</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-emerald-600 mb-2 group-hover:scale-110 transition-transform">sync_alt</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Cruzar Anticipo</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-emerald-600 mb-2 group-hover:scale-110 transition-transform">search</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Buscar</span>
                    </button>
                </div>

                <!-- Secondary Actions List -->
                <div class="bg-slate-100/50 dark:bg-slate-800/30 p-2 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Estado de Cuenta Cliente <span class="material-symbols-outlined !text-sm">account_balance_wallet</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Detalle Contabilización <span class="material-symbols-outlined !text-sm">receipt_long</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Exportar a Excel <span class="material-symbols-outlined !text-sm text-emerald-600">table_view</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
})
export class CashReceiptComponent { }
