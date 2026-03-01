import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-notification-settings',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="grid grid-cols-1 gap-8 py-8">
        <!-- Alertas de Presupuesto -->
        <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="space-y-1">
                <h3 class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">Alertas de Presupuesto</h3>
                <p class="text-xs text-slate-500 font-medium leading-relaxed">Configura avisos automáticos según el nivel de gasto mensual.</p>
            </div>

            <div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <!-- Alert 80% -->
                <div class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                    <div class="flex items-center gap-4">
                        <div class="size-10 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                            <span class="material-symbols-outlined text-[20px]">notifications</span>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-slate-900 dark:text-white">Alerta al alcanzar el 80%</p>
                            <p class="text-[10px] text-slate-500 font-medium">Recibe una notificación cuando el gasto llegue al 80% del presupuesto.</p>
                        </div>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked class="sr-only peer">
                        <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                </div>

                <!-- Alert 90% -->
                <div class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                    <div class="flex items-center gap-4">
                        <div class="size-10 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                            <span class="material-symbols-outlined text-[20px]">warning</span>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-slate-900 dark:text-white">Alerta al alcanzar el 90%</p>
                            <p class="text-[10px] text-slate-500 font-medium">Notificación crítica antes de agotar el presupuesto asignado.</p>
                        </div>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked class="sr-only peer">
                        <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                </div>
            </div>
        </section>

        <!-- Reportes Financieros -->
        <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="space-y-1">
                <h3 class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">Reportes Financieros</h3>
                <p class="text-xs text-slate-500 font-medium leading-relaxed">Recibe informes automatizados en formato PDF directamente en tu correo.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <!-- Card: Diario -->
                <div class="relative p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 group cursor-pointer hover:border-primary/20 transition-all">
                    <div class="absolute top-4 right-4 size-5 rounded border border-slate-200 dark:border-slate-700"></div>
                    <div class="size-10 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-slate-900 dark:text-white mb-4">
                        <span class="material-symbols-outlined">calendar_today</span>
                    </div>
                    <p class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none leading-none">Resumen Diario</p>
                    <p class="text-[10px] text-slate-500 font-medium leading-relaxed mt-2 text-slate-400">Enviado cada mañana a las 8:00 AM.</p>
                </div>

                <!-- Card: Semanal -->
                <div class="relative p-6 rounded-2xl border-2 border-primary bg-primary/5 group cursor-pointer">
                    <div class="absolute top-4 right-4 size-5 rounded bg-primary flex items-center justify-center">
                        <span class="material-symbols-outlined text-white text-[14px] font-black">done</span>
                    </div>
                    <div class="size-10 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 font-black">
                        <span class="material-symbols-outlined">reorder</span>
                    </div>
                    <p class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none">Reporte Semanal</p>
                    <p class="text-[10px] text-slate-500 font-medium leading-relaxed mt-2 text-slate-400">Balance de gastos enviado cada lunes.</p>
                </div>
            </div>
        </section>

        <!-- Footer Actions -->
        <div class="pt-12 flex items-center justify-end gap-6 pb-24">
            <button class="text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">Restablecer valores</button>
            <button class="bg-primary text-white px-10 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
                <span class="material-symbols-outlined !text-[20px]">save</span> Guardar Cambios
            </button>
        </div>
    </div>
  `
})
export class NotificationSettingsComponent { }
