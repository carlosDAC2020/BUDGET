import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-security-settings',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
        <!-- Left Column: Cambiar Contraseña -->
        <div class="lg:col-span-2">
            <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 h-full">
                <div class="flex items-center gap-3">
                    <div class="size-8 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg flex items-center justify-center">
                        <span class="material-symbols-outlined text-xl">lock_reset</span>
                    </div>
                    <h3 class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">Cambiar Contraseña</h3>
                </div>

                <div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-6">
                    <div>
                        <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest leading-none">Contraseña Actual</label>
                        <input type="password" value="............"
                            class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest leading-none">Nueva Contraseña</label>
                            <input type="password" value="............"
                                class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest leading-none">Confirmar Nueva Contraseña</label>
                            <input type="password" value="............"
                                class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        </div>
                    </div>

                    <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex gap-3">
                        <span class="material-symbols-outlined text-blue-600 text-[20px]">info</span>
                        <p class="text-xs text-blue-700 dark:text-blue-300 font-medium leading-relaxed">The password must have at least 12 characters, include an uppercase letter, a number, and a special character. Do not use previously used passwords.</p>
                    </div>

                    <div class="flex justify-end pt-4">
                        <button class="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                            Actualizar Contraseña
                        </button>
                    </div>
                </div>
            </section>
        </div>

        <!-- Right Column: 2FA & Active Sessions -->
        <div class="space-y-8">
            <!-- 2FA -->
            <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="size-8 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-lg flex items-center justify-center">
                            <span class="material-symbols-outlined text-xl">verified_user</span>
                        </div>
                        <h3 class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none leading-none">2FA</h3>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked class="sr-only peer">
                        <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                </div>
                <p class="text-xs text-slate-500 font-medium leading-relaxed">Adds an extra layer of security to your account by using a verification code from your mobile device.</p>
                <button class="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-primary font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Configure Authentication App
                </button>
            </section>

            <!-- Sesiones Activas -->
            <section class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                <div class="flex items-center gap-3">
                    <div class="size-8 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-lg flex items-center justify-center">
                        <span class="material-symbols-outlined text-xl">devices</span>
                    </div>
                    <h3 class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-none">Active Sessions</h3>
                </div>

                <div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-center gap-4">
                        <div class="size-10 bg-white dark:bg-slate-700 rounded-lg shadow-sm flex items-center justify-center text-slate-900 dark:text-white">
                            <span class="material-symbols-outlined">laptop</span>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">Chrome on Windows</p>
                            <p class="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Madrid, ES • Active now</p>
                        </div>
                    </div>
                    <button class="w-full pt-4 flex items-center justify-center gap-2 text-red-500 font-bold text-sm hover:text-red-600 transition-colors">
                        <span class="material-symbols-outlined text-[18px]">logout</span> Close other sessions
                    </button>
                </div>
            </section>
        </div>

        <!-- Bottom row: Historial de Seguridad -->
        <div class="lg:col-span-3">
            <section class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="p-8 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="size-8 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-lg flex items-center justify-center">
                            <span class="material-symbols-outlined text-xl">history</span>
                        </div>
                        <h3 class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight">Historial de Seguridad</h3>
                    </div>
                    <button class="text-sm font-bold text-primary hover:underline">Ver todo</button>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800/50 border-y border-slate-100 dark:border-slate-800">
                                <th class="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">EVENT</th>
                                <th class="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">DEVICE</th>
                                <th class="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">DATE/TIME</th>
                                <th class="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">STATUS</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-50 dark:divide-slate-800/50">
                            <tr>
                                <td class="px-8 py-5">
                                    <p class="text-sm font-bold text-slate-900 dark:text-white">Successful session start</p>
                                </td>
                                <td class="px-8 py-5">
                                    <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">Chrome / Windows</p>
                                </td>
                                <td class="px-8 py-5">
                                    <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">Today, 14:32</p>
                                </td>
                                <td class="px-8 py-5">
                                    <span class="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full">Successful</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-8 py-5">
                                    <p class="text-sm font-bold text-slate-900 dark:text-white">Password change</p>
                                </td>
                                <td class="px-8 py-5">
                                    <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">Firefox / MacOS</p>
                                </td>
                                <td class="px-8 py-5">
                                    <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">Yesterday, 09:15</p>
                                </td>
                                <td class="px-8 py-5">
                                    <span class="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full">Successful</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </div>
  `
})
export class SecuritySettingsComponent { }
