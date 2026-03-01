import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-user-management',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
        <!-- Page Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="space-y-1">
                <nav class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    <a href="#" class="hover:text-primary transition-colors">Configuración</a>
                    <span class="material-symbols-outlined !text-[14px]">chevron_right</span>
                    <span class="text-slate-600 dark:text-slate-200">Administración de Usuarios</span>
                </nav>
                <h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">User Administration</h1>
                <p class="text-slate-500 dark:text-slate-400 font-medium">Manage platform access, roles, and granular module permissions.</p>
            </div>
            <div class="flex items-center gap-3">
                <button class="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 font-black text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                    <span class="material-symbols-outlined !text-[20px]">file_download</span> Export
                </button>
                <button class="p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors shadow-sm">
                    <span class="material-symbols-outlined !text-[20px]">grid_view</span>
                </button>
            </div>
        </div>

        <!-- Tab Navigation -->
        <div class="flex items-center gap-8 border-b border-slate-200 dark:border-slate-800">
            <a routerLink="./list" routerLinkActive="border-primary text-primary" [routerLinkActiveOptions]="{exact: false}"
                class="pb-4 text-sm font-black border-b-2 border-transparent text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-2 transition-all">
                <span class="material-symbols-outlined text-lg">group</span> Usuarios (Users)
            </a>
            <a routerLink="./roles" routerLinkActive="border-primary text-primary"
                class="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-2 transition-all group">
                <span class="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">verified_user</span> Roles & Permissions
            </a>
            <a routerLink="./modules" routerLinkActive="border-primary text-primary"
                class="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-2 transition-all group">
                <span class="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary">view_module</span> Modulos (Modules)
            </a>
        </div>

        <!-- Child Views -->
        <router-outlet></router-outlet>
    </div>
  `
})
export class UserManagementComponent { }
