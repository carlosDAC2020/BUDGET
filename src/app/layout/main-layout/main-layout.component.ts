import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SidebarComponent],
    template: `
    <div class="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <!-- Sidebar Navigation -->
      <app-sidebar></app-sidebar>

      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col overflow-y-auto">
          <!-- Header -->
          <header class="h-24 flex items-center justify-between px-8 sticky top-0 z-50 bg-white/5 backdrop-blur-md border-none pt-4">
              <!-- Left: Global Actions -->
              <div class="flex items-center gap-4">
                  <button class="size-12 flex items-center justify-center text-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-2xl relative transition-all hover:scale-110 hover:text-primary">
                      <span class="material-symbols-outlined !text-[32px]">notifications</span>
                      <span class="absolute top-3 right-3 size-3 bg-red-500 rounded-full border-2 border-slate-50 dark:border-slate-900"></span>
                  </button>
                  <button class="size-12 flex items-center justify-center text-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-2xl transition-all hover:scale-110 hover:text-primary">
                      <span class="material-symbols-outlined !text-[32px]">help</span>
                  </button>
              </div>

              <!-- Right: Fiscal Year Badge -->
              <div class="flex items-center gap-2 px-4 py-2 bg-indigo-500/5 dark:bg-indigo-500/10 backdrop-blur-sm rounded-full border border-indigo-500/20 dark:border-indigo-500/30 text-[11px] font-black text-indigo-600/80 dark:text-indigo-400 uppercase tracking-widest shadow-sm hover:bg-indigo-500/10 transition-all cursor-pointer">
                  <span class="material-symbols-outlined !text-[16px] text-indigo-500">calendar_today</span>
                  <span>Año Fiscal 2026</span>
              </div>
          </header>

          <div class="p-8 pt-4 space-y-8 max-w-[1400px] mx-auto w-full">
              <router-outlet></router-outlet>
          </div>
      </main>
    </div>
  `
})
export class MainLayoutComponent { }
