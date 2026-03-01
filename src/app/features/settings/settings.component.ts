import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
    template: `
    <div class="p-8 space-y-8 max-w-[1200px] mx-auto w-full">
        <!-- Page Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="space-y-1">
                <nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    <a href="#" class="hover:text-primary transition-colors">Sistema</a>
                    <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span class="text-slate-600 dark:text-slate-200">Configuración General</span>
                </nav>
                <h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">System Settings</h1>
                <p class="text-slate-500 dark:text-slate-400 font-medium">Administra la información de tu empresa y las preferencias del sistema.</p>
            </div>
            <div class="flex items-center gap-3">
                <button class="bg-primary text-white px-6 py-2.5 rounded-xl font-black text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">save</span> Guardar Todos los Cambios
                </button>
            </div>
        </div>

        <!-- Tab Navigation -->
        <div class="border-b border-slate-200 dark:border-slate-800 flex gap-8">
            <a routerLink="./company" routerLinkActive="border-primary text-primary" [routerLinkActiveOptions]="{exact: false}"
                class="pb-4 text-sm font-black border-b-2 border-transparent text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-2 transition-all">
                <span class="material-symbols-outlined text-lg">domain</span> Empresa
            </a>
            <a routerLink="./preferences" routerLinkActive="border-primary text-primary"
                class="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-2 transition-all group">
                <span class="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">tune</span> Preferencias
            </a>
            <a routerLink="./security" routerLinkActive="border-primary text-primary"
                class="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-2 transition-all group">
                <span class="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">security</span> Seguridad
            </a>
            <a routerLink="./notifications" routerLinkActive="border-primary text-primary"
                class="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-2 transition-all group">
                <span class="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">notifications_active</span> Notificaciones
            </a>
        </div>

        <!-- Child Views -->
        <router-outlet></router-outlet>
    </div>
  `
})
export class SettingsComponent { }
