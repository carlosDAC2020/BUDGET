import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-preference-settings',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="grid grid-cols-1 gap-8 py-8">
        <!-- Localización -->
        <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="flex items-center gap-3">
                <div class="size-8 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-xl">public</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">Localización</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Moneda Principal</label>
                    <select class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option>COP - Peso Colombiano</option>
                        <option>USD - Dólar Estadounidense</option>
                        <option>EUR - Euro</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Idioma</label>
                    <select class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option>Español - Colombia</option>
                        <option>English - United States</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Zona Horaria</label>
                    <select class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option>(GMT-05:00) Bogota, Lima, Quito</option>
                        <option>(GMT-04:00) Santiago de Chile</option>
                    </select>
                </div>
            </div>
        </section>

        <!-- Visualización -->
        <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="flex items-center gap-3">
                <div class="size-8 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-xl">visibility</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">Visualización</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Formato de Fecha</label>
                        <select class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                            <option>DD/MM/YYYY (Ej: 31/12/2023)</option>
                            <option>MM/DD/YYYY (Ej: 12/31/2023)</option>
                        </select>
                    </div>
                    <div>
                        <label class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                            Separador de Miles/Decimales
                            <span class="material-symbols-outlined text-[16px] text-slate-400 cursor-help">info</span>
                        </label>
                        <div class="flex gap-4">
                            <button class="flex-1 py-3 px-4 rounded-xl border-2 border-primary text-primary font-bold text-sm bg-primary/5">1.234,56</button>
                            <button class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">1,234.56</button>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <p class="font-bold text-slate-900 dark:text-white">Modo Compacto</p>
                        <p class="text-xs text-slate-500 font-medium max-w-[200px]">Reduce el espaciado en tablas y listas para ver más información en una sola pantalla.</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                </div>
            </div>
        </section>

        <!-- Reportes Automáticos -->
        <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="flex items-center gap-3">
                <div class="size-8 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-xl">auto_graph</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">Reportes Automáticos</h3>
            </div>
            <div class="space-y-6">
                <div>
                    <label class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">Frecuencia de Resumen Financiero</label>
                    <div class="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-full md:w-[400px]">
                        <button class="flex-1 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 rounded-lg hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Diario</button>
                        <button class="flex-1 py-2 text-sm font-extrabold text-primary bg-white dark:bg-slate-700 rounded-lg shadow-sm">Semanal</button>
                        <button class="flex-1 py-2 text-sm font-bold text-slate-500 dark:text-slate-400 rounded-lg hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Mensual</button>
                    </div>
                    <p class="mt-4 text-xs text-slate-500 font-medium">Recibirás un resumen consolidado de tus ingresos y gastos por correo electrónico.</p>
                </div>
                <div class="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="size-10 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center">
                            <span class="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-slate-900 dark:text-white">Email de destino</p>
                            <p class="text-xs text-slate-500 font-medium text-slate-400">c.perez@empresa.com (Sincronizado con cuenta)</p>
                        </div>
                    </div>
                    <button class="text-sm font-bold text-primary hover:underline">Cambiar</button>
                </div>
            </div>
        </section>

        <!-- Footer Actions -->
        <div class="flex items-center justify-end gap-6 pb-8">
            <button class="text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">Cancelar</button>
            <button class="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                <span class="material-symbols-outlined !text-[20px]">save</span> Guardar Cambios
            </button>
        </div>
    </div>
  `
})
export class PreferenceSettingsComponent { }
