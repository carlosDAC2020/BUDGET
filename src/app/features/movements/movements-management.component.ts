import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-movements-management',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
        <!-- Page Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="space-y-1">
                <nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    <a href="#" class="hover:text-primary transition-colors">Panel principal</a>
                    <span class="material-symbols-outlined !text-[14px]">chevron_right</span>
                    <span class="text-slate-600 dark:text-slate-200">Gestión de Documentos</span>
                </nav>
                <h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Panel principal</h1>
                <p class="text-slate-500 dark:text-slate-400 font-medium">Gestión integral de documentos contables y movimientos financieros.</p>
            </div>
            <div class="flex items-center gap-3">
                <button class="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 font-black text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                    <span class="material-symbols-outlined !text-[20px]">add</span> Nuevo Documento
                </button>
            </div>
        </div>

        <!-- Tab Navigation (Pill Style) -->
        <div class="flex flex-wrap items-center gap-2 p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl w-fit">
            <a routerLink="./sales-invoice" routerLinkActive="active bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                class="px-5 py-2.5 text-[11px] font-black text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap transition-all uppercase tracking-widest rounded-xl flex items-center gap-2">
                Factura de Venta
            </a>
            <a routerLink="./purchase-invoice" routerLinkActive="active bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                class="px-5 py-2.5 text-[11px] font-black text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap transition-all uppercase tracking-widest rounded-xl flex items-center gap-2">
                Factura de Compra
            </a>
            <a routerLink="./payroll" routerLinkActive="active bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                class="px-5 py-2.5 text-[11px] font-black text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap transition-all uppercase tracking-widest rounded-xl flex items-center gap-2">
                Nómina
            </a>
            <a routerLink="./cash-receipt" routerLinkActive="active bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                class="px-5 py-2.5 text-[11px] font-black text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap transition-all uppercase tracking-widest rounded-xl flex items-center gap-2">
                Recibo de Caja
            </a>
            <a routerLink="./payment-voucher" routerLinkActive="active bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                class="px-5 py-2.5 text-[11px] font-black text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap transition-all uppercase tracking-widest rounded-xl flex items-center gap-2">
                Comprobante de Egreso
            </a>
            <a routerLink="./bank-deposit" routerLinkActive="active bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                class="px-5 py-2.5 text-[11px] font-black text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap transition-all uppercase tracking-widest rounded-xl flex items-center gap-2">
                Consignación Bancaria
            </a>
            <a routerLink="./accounting-note" routerLinkActive="active bg-white dark:bg-slate-700 text-indigo-600 shadow-sm"
                class="px-5 py-2.5 text-[11px] font-black text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 whitespace-nowrap transition-all uppercase tracking-widest rounded-xl flex items-center gap-2">
                Nota de Contabilidad
            </a>
        </div>

        <!-- Child Views -->
        <router-outlet></router-outlet>
    </div>
    `
})
export class MovementsManagementComponent { }
