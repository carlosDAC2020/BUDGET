import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="space-y-8 max-w-[1400px] mx-auto w-full">
      <!-- KPI Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div class="flex items-start justify-between relative z-10">
                  <div>
                      <p class="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">
                          Total Annual Budget</p>
                      <h3 class="text-3xl font-black text-slate-900 dark:text-white">$1,250,000</h3>
                  </div>
                  <div class="size-12 bg-primary/5 dark:bg-primary/20 text-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                      <span class="material-symbols-outlined text-2xl font-variation-fill">account_balance</span>
                  </div>
              </div>
              <div class="mt-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold relative z-10">
                  <span class="material-symbols-outlined text-sm">trending_up</span>
                  <span>+5.2% than last fiscal year</span>
              </div>
              <div class="absolute -right-6 -bottom-6 size-24 bg-primary/5 rounded-full blur-2xl"></div>
          </div>

          <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div class="flex items-start justify-between relative z-10">
                  <div>
                      <p class="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">
                          Expenses to Date</p>
                      <h3 class="text-3xl font-black text-slate-900 dark:text-white">$850,000</h3>
                  </div>
                  <div class="size-12 bg-amber-500/5 dark:bg-amber-500/20 text-amber-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                      <span class="material-symbols-outlined text-2xl font-variation-fill">receipt_long</span>
                  </div>
              </div>
              <div class="mt-4 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold relative z-10">
                  <div class="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full bg-amber-500" style="width: 68%;"></div>
                  </div>
                  <span>68% of total</span>
              </div>
          </div>

          <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div class="flex items-start justify-between relative z-10">
                  <div>
                      <p class="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">
                          Projected Q4</p>
                      <h3 class="text-3xl font-black text-primary">$400,000</h3>
                  </div>
                  <div class="size-12 bg-primary dark:bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                      <span class="material-symbols-outlined text-2xl font-variation-fill">analytics</span>
                  </div>
              </div>
              <p class="mt-4 text-[11px] text-slate-500 dark:text-slate-400 font-medium relative z-10 flex items-center gap-1">
                  <span class="material-symbols-outlined text-xs text-primary">info</span>
                  Estimado basado en el consumo histórico.
              </p>
          </div>
      </div>

      <!-- Charts and Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Monthly Trends Bar Chart Mock -->
          <div class="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="flex items-center justify-between mb-10">
                  <div>
                      <h4 class="font-black text-xl text-slate-900 dark:text-white tracking-tight">Evolución Presupuestaria</h4>
                      <p class="text-sm text-slate-500 font-medium">Análisis de los últimos 6 meses</p>
                  </div>
                  <div class="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-primary/20"></span><span>Prespuesto</span>
                      </div>
                      <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-primary"></span><span>Gastado</span>
                      </div>
                  </div>
              </div>

              <div class="h-72 flex items-end gap-2 md:gap-4 px-2 relative border-b border-slate-100 dark:border-slate-800">
                  <!-- Y-axis labels -->
                  <div class="absolute -left-2 inset-y-0 flex flex-col justify-between text-[9px] font-bold text-slate-300 pointer-events-none">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                  </div>

                  <!-- Bar groups -->
                  <div class="flex-1 flex items-end justify-center gap-1 group relative h-full">
                      <div class="w-3 md:w-5 bg-primary/10 rounded-t-lg h-[80%] transition-all group-hover:bg-primary/20"></div>
                      <div class="w-3 md:w-5 bg-primary rounded-t-lg h-[65%] transition-all group-hover:scale-y-105 shadow-sm"></div>
                      <span class="absolute -bottom-7 left-0 right-0 text-center text-[10px] font-black text-slate-400 group-hover:text-primary transition-colors uppercase">Ene</span>
                  </div>
                  <div class="flex-1 flex items-end justify-center gap-1 group relative h-full">
                      <div class="w-3 md:w-5 bg-primary/10 rounded-t-lg h-[80%] transition-all group-hover:bg-primary/20"></div>
                      <div class="w-3 md:w-5 bg-primary rounded-t-lg h-[85%] transition-all group-hover:scale-y-105 shadow-sm"></div>
                      <span class="absolute -bottom-7 left-0 right-0 text-center text-[10px] font-black text-slate-400 group-hover:text-primary transition-colors uppercase">Feb</span>
                  </div>
                  <div class="flex-1 flex items-end justify-center gap-1 group relative h-full">
                      <div class="w-3 md:w-5 bg-primary/10 rounded-t-lg h-[85%] transition-all group-hover:bg-primary/20"></div>
                      <div class="w-3 md:w-5 bg-primary rounded-t-lg h-[70%] transition-all group-hover:scale-y-105 shadow-sm"></div>
                      <span class="absolute -bottom-7 left-0 right-0 text-center text-[10px] font-black text-slate-400 group-hover:text-primary transition-colors uppercase">Mar</span>
                  </div>
                  <div class="flex-1 flex items-end justify-center gap-1 group relative h-full">
                      <div class="w-3 md:w-5 bg-primary/10 rounded-t-lg h-[90%] transition-all group-hover:bg-primary/20"></div>
                      <div class="w-3 md:w-5 bg-primary rounded-t-lg h-[95%] transition-all group-hover:scale-y-105 shadow-sm"></div>
                      <span class="absolute -bottom-7 left-0 right-0 text-center text-[10px] font-black text-slate-400 group-hover:text-primary transition-colors uppercase">Abr</span>
                  </div>
                  <div class="flex-1 flex items-end justify-center gap-1 group relative h-full">
                      <div class="w-3 md:w-5 bg-primary/10 rounded-t-lg h-[90%] transition-all group-hover:bg-primary/20"></div>
                      <div class="w-3 md:w-5 bg-primary rounded-t-lg h-[78%] transition-all group-hover:scale-y-105 shadow-sm"></div>
                      <span class="absolute -bottom-7 left-0 right-0 text-center text-[10px] font-black text-slate-400 group-hover:text-primary transition-colors uppercase">May</span>
                  </div>
                  <div class="flex-1 flex items-end justify-center gap-1 group relative h-full">
                      <div class="w-3 md:w-5 bg-primary/10 rounded-t-lg h-[95%] transition-all group-hover:bg-primary/20"></div>
                      <div class="w-3 md:w-5 bg-primary rounded-t-lg h-[90%] transition-all group-hover:scale-y-105 shadow-sm"></div>
                      <span class="absolute -bottom-7 left-0 right-0 text-center text-[10px] font-black text-slate-400 group-hover:text-primary transition-colors uppercase">Jun</span>
                  </div>
              </div>
          </div>

          <!-- Expenses by Area donut Chart -->
          <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 class="font-black text-xl text-slate-900 dark:text-white tracking-tight mb-1">Gastos por Área</h4>
              <p class="text-sm text-slate-500 font-medium mb-10">Distribución porcentual actual</p>
              <div class="flex flex-col items-center">
                  <!-- Visual Ring -->
                  <div class="relative size-48 rounded-full border-[18px] border-slate-100 dark:border-slate-800 flex items-center justify-center">
                      <div class="absolute inset-0 rounded-full border-[18px] border-transparent border-t-primary border-r-primary/60 border-l-primary/30 rotate-45 shadow-[0_0_20px_rgba(26,34,127,0.1)]"></div>
                      <div class="text-center">
                          <p class="text-3xl font-black text-slate-900 dark:text-white">$850k</p>
                          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Total</p>
                      </div>
                  </div>
                  <div class="w-full mt-10 space-y-4">
                      <div class="flex items-center justify-between text-xs group cursor-default">
                          <div class="flex items-center gap-3">
                              <span class="size-3 rounded-full bg-primary shadow-sm shadow-primary/40 group-hover:scale-125 transition-transform"></span>
                              <span class="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-tighter">Marketing</span>
                          </div>
                          <span class="font-black text-slate-900 dark:text-white">$240k</span>
                      </div>
                      <div class="flex items-center justify-between text-xs group cursor-default">
                          <div class="flex items-center gap-3">
                              <span class="size-3 rounded-full bg-primary/60 shadow-sm shadow-primary/20 group-hover:scale-125 transition-transform"></span>
                              <span class="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-tighter">Operations</span>
                          </div>
                          <span class="font-black text-slate-900 dark:text-white">$310k</span>
                      </div>
                      <div class="flex items-center justify-between text-xs group cursor-default">
                          <div class="flex items-center gap-3">
                              <span class="size-3 rounded-full bg-primary/30 shadow-sm group-hover:scale-125 transition-transform"></span>
                              <span class="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-tighter">HR & Admin</span>
                          </div>
                          <span class="font-black text-slate-900 dark:text-white">$180k</span>
                      </div>
                      <div class="flex items-center justify-between text-xs group cursor-default">
                          <div class="flex items-center gap-3">
                              <span class="size-3 rounded-full bg-slate-200 dark:bg-slate-700 shadow-sm group-hover:scale-125 transition-transform"></span>
                              <span class="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-tighter">Others</span>
                          </div>
                          <span class="font-black text-slate-900 dark:text-white">$120k</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Bottom Row: Alerts & Recent Movements -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Alerts Section -->
          <div class="lg:col-span-1 space-y-4">
              <div class="flex items-center justify-between">
                  <h4 class="font-bold text-lg text-slate-900 dark:text-white">Active Alerts</h4>
                  <span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[10px] font-black rounded uppercase tracking-tighter">Action Required</span>
              </div>
              <div class="space-y-3">
                  <div class="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl flex gap-3 group hover:bg-red-100/50 dark:hover:bg-red-900/20 transition-all cursor-pointer">
                      <span class="material-symbols-outlined text-red-500 mt-0.5 group-hover:scale-110 transition-transform">warning</span>
                      <div>
                          <p class="text-sm font-bold text-red-900 dark:text-red-100">Critical: IT Overspend</p>
                          <p class="text-[11px] text-red-700 dark:text-red-300 mt-1 leading-relaxed">
                              Infrastructure cloud costs exceeded Q3 budget by $4,200.</p>
                      </div>
                  </div>
                  <div class="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl flex gap-3 group hover:bg-amber-100/50 dark:hover:bg-amber-900/20 transition-all cursor-pointer">
                      <span class="material-symbols-outlined text-amber-500 mt-0.5 group-hover:scale-110 transition-transform">report_problem</span>
                      <div>
                          <p class="text-sm font-bold text-amber-900 dark:text-amber-100">Marketing Threshold</p>
                          <p class="text-[11px] text-amber-700 dark:text-amber-300 mt-1 leading-relaxed">
                              Marketing campaign budget has reached 88% of its total limit.</p>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Transactions Table -->
          <div class="lg:col-span-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                  <h4 class="font-bold text-lg text-slate-900 dark:text-white">Recent Movements</h4>
                  <button class="text-primary text-xs font-black uppercase tracking-widest hover:opacity-80 transition-all flex items-center gap-2">
                      Full History <span class="material-symbols-outlined text-sm">open_in_new</span>
                  </button>
              </div>
              <div class="overflow-x-auto">
                  <table class="w-full text-left">
                      <thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                          <tr>
                              <th class="px-6 py-4">Transaction Details</th>
                              <th class="px-6 py-4">Department</th>
                              <th class="px-6 py-4 text-right">Amount</th>
                              <th class="px-6 py-4">Status</th>
                              <th class="px-6 py-4">Date</th>
                          </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                              <td class="px-6 py-4">
                                  <div class="flex items-center gap-3">
                                      <div class="size-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                          <span class="material-symbols-outlined text-lg">cloud</span>
                                      </div>
                                      <div>
                                          <p class="text-sm font-bold text-slate-900 dark:text-white">AWS Service Renewal</p>
                                          <p class="text-[10px] text-slate-400 font-medium tracking-tight">ID: TXN-00124</p>
                                      </div>
                                  </div>
                              </td>
                              <td class="px-6 py-4">
                                  <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded">IT Infra</span>
                              </td>
                              <td class="px-6 py-4 text-sm font-black text-right text-red-600">-$12,450.00</td>
                              <td class="px-6 py-4">
                                  <div class="flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                                      <span class="size-1.5 bg-emerald-600 rounded-full animate-pulse"></span>
                                      Success
                                  </div>
                              </td>
                              <td class="px-6 py-4 text-sm text-slate-500 font-medium">Oct 12, 2023</td>
                          </tr>
                          <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                              <td class="px-6 py-4">
                                  <div class="flex items-center gap-3">
                                      <div class="size-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                          <span class="material-symbols-outlined text-lg">campaign</span>
                                      </div>
                                      <div>
                                          <p class="text-sm font-bold text-slate-900 dark:text-white">Google Ads - Q4 Launch</p>
                                          <p class="text-[10px] text-slate-400 font-medium tracking-tight">ID: TXN-00125</p>
                                      </div>
                                  </div>
                              </td>
                              <td class="px-6 py-4">
                                  <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded">Marketing</span>
                              </td>
                              <td class="px-6 py-4 text-sm font-black text-right text-red-600">-$8,200.00</td>
                              <td class="px-6 py-4">
                                  <div class="flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                                      <span class="size-1.5 bg-emerald-600 rounded-full"></span>
                                      Success
                                  </div>
                              </td>
                              <td class="px-6 py-4 text-sm text-slate-500 font-medium">Oct 10, 2023</td>
                          </tr>
                          <!-- More rows can be added here -->
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    </div>
  `
})
export class DashboardComponent { }
