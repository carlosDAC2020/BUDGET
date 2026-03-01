import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    styles: [`
        :host {
            display: block;
            height: 100%;
        }
    `],
    template: `
    <aside class="w-64 bg-primary text-white flex flex-col h-full shrink-0">
      <div class="p-6 flex items-center gap-3 border-b border-white/10">
          <div class="size-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-2xl">account_balance_wallet</span>
          </div>
          <div>
              <h1 class="font-black text-xl leading-tight tracking-tighter">BUDGET</h1>
              <p class="text-white/60 text-[10px] uppercase font-bold tracking-widest">Enterprise</p>
          </div>
      </div>
      <nav class="flex-1 px-4 py-6 space-y-1">
          <a routerLink="/dashboard" routerLinkActive="bg-white/10" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors">
              <span class="material-symbols-outlined !text-xl">dashboard</span>
              <span class="font-medium text-sm">Dashboard</span>
          </a>
          <a routerLink="/movements" routerLinkActive="bg-white/10" class="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
              <span class="material-symbols-outlined !text-xl">swap_horiz</span>
              <span class="font-medium text-sm">Panel principal</span>
          </a>
          <a routerLink="/budgets" routerLinkActive="bg-white/10" class="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
              <span class="material-symbols-outlined !text-xl">payments</span>
              <span class="font-medium text-sm">Budgets</span>
          </a>
          <a routerLink="/users" routerLinkActive="bg-white/10" class="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
              <span class="material-symbols-outlined !text-xl">group</span>
              <span class="font-medium text-sm">Users</span>
          </a>
          <a routerLink="/settings" routerLinkActive="bg-white/10" class="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
              <span class="material-symbols-outlined !text-xl">settings</span>
              <span class="font-medium text-sm">Settings</span>
          </a>
      </nav>
      <div class="p-4 border-t border-white/10">
          <div class="flex items-center gap-3 p-2">
              <img alt="User Profile" class="size-10 rounded-full border-2 border-white/20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAatnfYa1oS2CC1qHukRwajuRF8NT0B_xrQ0D9T1q4oyz28wcGxdRhyEVa2oiNlOCDi8lQPthxmV0Z9C_4gKUvaZ_mSdtN-JsjMZ8rf0llS7pVTnWFFPdzTd4kyTTBXmTjVH64Q7MQTupJif_L4lh0aTFqpaImuvkd6Ji86gpHY9A4RATVDU9lIJNkXcpTcPMd7hUNndT4GQi2R4oT_cCPSVGSmtARVGsZfp37uS8s15MtCoyimohS-32Ym31dwbtR031eAswY2MHQ" />
              <div class="flex-1 overflow-hidden">
                  <p class="text-sm font-semibold truncate">Alex Rivera</p>
                  <p class="text-xs text-white/50 truncate">Financial Director</p>
              </div>
              <a routerLink="/login" class="material-symbols-outlined text-white/40 hover:text-white transition-colors">logout</a>
          </div>
      </div>
    </aside>
  `
})
export class SidebarComponent { }
