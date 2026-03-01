import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sales-invoice',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col gap-8 animate-in fade-in duration-500">
        <!-- Top Status Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/60 dark:border-slate-700/60 shadow-sm">
            <div class="flex items-center gap-6">
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Documento No.</span>
                    <div class="flex items-center gap-2">
                        <span class="text-primary font-black text-xl tracking-tighter">FV-2026</span>
                        <span class="text-slate-300 dark:text-slate-600 font-light text-xl">/</span>
                        <span class="text-slate-900 dark:text-white font-black text-xl tracking-tighter">000124</span>
                    </div>
                </div>
                <div class="h-10 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                <div class="flex flex-col">
                    <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado</span>
                    <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mt-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Borrador
                    </span>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="flex -space-x-2">
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm" title="Anulado: No">A</div>
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm" title="Verificado: Sí">V</div>
                    <div class="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-primary flex items-center justify-center text-[10px] font-bold text-white shadow-sm" title="Electrónico: Sí">E</div>
                </div>
                <button class="size-10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all">
                    <span class="material-symbols-outlined">more_vert</span>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <!-- Main Form Section -->
            <div class="xl:col-span-3 space-y-8">
                <!-- Header Fields Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Fecha Emisión</label>
                        <div class="relative group">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">calendar_today</span>
                            <input type="date" value="2026-01-27" class="w-full pl-12 pr-4 py-3 pb-3.5 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Cliente</label>
                        <div class="relative group">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">person</span>
                            <input type="text" placeholder="Buscar cliente..." value="COPROPIEDAD EDIFICIO LAS TERRAZAS" class="w-full pl-12 pr-4 py-3 pb-3.5 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Vendedor</label>
                        <select class="w-full px-4 py-3 pb-3.5 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                            <option>Administrador Principal</option>
                            <option>Vendedor Zona Norte</option>
                        </select>
                    </div>

                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Forma de Pago</label>
                        <select class="w-full px-4 py-3 pb-3.5 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                            <option>Crédito 30 días</option>
                            <option>Contado</option>
                            <option>Transferencia</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Moneda</label>
                        <div class="flex gap-2">
                            <button class="flex-1 py-3 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20">COP</button>
                            <button class="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">USD</button>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Concepto</label>
                        <input type="text" value="FACTURA DE VENTA" class="w-full px-4 py-3 pb-3.5 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                    </div>
                </div>

                <!-- Items Table -->
                <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <h4 class="font-black text-lg text-slate-900 dark:text-white tracking-tight">Detalle de Productos</h4>
                        <button class="px-4 py-2 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all">
                            + Añadir Línea
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                    <th class="px-6 py-4">Ítem / Referencia</th>
                                    <th class="px-6 py-4">Cant.</th>
                                    <th class="px-6 py-4">Valor Unit.</th>
                                    <th class="px-6 py-4">IVA %</th>
                                    <th class="px-6 py-4">Total</th>
                                    <th class="px-6 py-4 text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr class="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td class="px-6 py-5">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-bold text-slate-800 dark:text-slate-200">Servicios de Consultoría</span>
                                            <span class="text-[10px] text-slate-400 font-medium tracking-tight">REF: SERV-001</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="number" value="1" class="w-16 px-2 py-1 bg-slate-100 dark:bg-slate-800 border-none rounded text-sm font-bold text-slate-700 dark:text-slate-200 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <input type="text" value="1,200,000" class="w-32 px-2 py-1 bg-slate-100 dark:bg-slate-800 border-none rounded text-sm font-bold text-slate-700 dark:text-slate-200 outline-none" />
                                    </td>
                                    <td class="px-6 py-5">
                                        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded">19%</span>
                                    </td>
                                    <td class="px-6 py-5 font-black text-sm text-slate-900 dark:text-white">$1,428,000</td>
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
                <div class="bg-primary text-white p-8 rounded-3xl shadow-2xl shadow-primary/30 relative overflow-hidden group">
                    <div class="relative z-10 space-y-6">
                        <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Resumen Transacción</h4>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-white/70">Subtotal</span>
                                <span class="font-black">$1,200,000</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-white/70">Descuento (0%)</span>
                                <span class="font-black">$0</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="font-medium text-white/70">IVA (19%)</span>
                                <span class="font-black">$228,000</span>
                            </div>
                            <div class="h-px bg-white/20 my-2"></div>
                            <div class="flex justify-between items-end">
                                <span class="text-xs font-black uppercase tracking-widest text-white/80 pb-1">Total COP</span>
                                <span class="text-3xl font-black tracking-tighter leading-none">$1,428,000</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -right-10 -bottom-10 size-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                </div>

                <!-- Main Actions Grid -->
                <div class="grid grid-cols-2 gap-4">
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">task_alt</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">Contabilizar</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">print</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">Imprimir</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">mail</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">Enviar Email</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all group shadow-sm">
                        <span class="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">content_copy</span>
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">Duplicar</span>
                    </button>
                </div>

                <!-- Secondary Actions List -->
                <div class="bg-slate-100/50 dark:bg-slate-800/30 p-2 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Estado de Cuenta Cliente <span class="material-symbols-outlined !text-sm">arrow_forward</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-xs font-bold text-slate-500 transition-all">
                        Ver Asiento Contable <span class="material-symbols-outlined !text-sm">receipt_long</span>
                    </button>
                    <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/10 text-xs font-bold text-slate-500 transition-all">
                        Anular Documento <span class="material-symbols-outlined !text-sm">cancel</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
})
export class SalesInvoiceComponent { }
