import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-roles',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col xl:flex-row gap-8 py-8">
        <!-- Left Panel: Roles List -->
        <div class="w-full xl:w-80 space-y-4 shrink-0">
            <div class="flex items-center justify-between">
                <h3 class="text-slate-800 dark:text-white font-bold uppercase text-xs tracking-widest">Roles Activos</h3>
                <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wider">3 Total</span>
            </div>

            <div class="space-y-3">
                <!-- Role Card Active -->
                <div class="p-5 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20 cursor-pointer transition-all border border-white/10">
                    <div class="flex justify-between items-start mb-2">
                        <span class="font-black tracking-tight text-lg">Administrator</span>
                        <span class="material-symbols-outlined !text-xl opacity-60">check_circle</span>
                    </div>
                    <p class="text-xs text-white/80 leading-relaxed mb-4 font-medium">Full system access and control over all organizational units.</p>
                    <div class="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg w-fit">
                        <span class="material-symbols-outlined !text-sm">people</span>
                        <span class="text-[11px] font-bold">12 Users</span>
                    </div>
                </div>

                <!-- Role Card Editor -->
                <div class="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all cursor-pointer group">
                    <div class="flex justify-between items-start mb-2">
                        <span class="font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">Editor</span>
                        <span class="material-symbols-outlined !text-xl text-slate-400 font-variation-settings-fill-0">info</span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Can view all data and edit movements and budgets.</p>
                    <div class="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg w-fit">
                        <span class="material-symbols-outlined !text-sm text-slate-400">people</span>
                        <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">45 Users</span>
                    </div>
                </div>

                <!-- Role Card Viewer -->
                <div class="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 transition-all cursor-pointer group">
                    <div class="flex justify-between items-start mb-2">
                        <span class="font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">Viewer</span>
                        <span class="material-symbols-outlined !text-xl text-slate-400">lock</span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Restricted access to reports and movement tracking only.</p>
                    <div class="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg w-fit">
                        <span class="material-symbols-outlined !text-sm text-slate-400">people</span>
                        <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">128 Users</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Panel: Permission Matrix -->
        <div class="flex-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
            <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h3 class="text-lg font-black text-slate-800 dark:text-white tracking-tight">Permission Matrix</h3>
                    <p class="text-sm text-slate-500 font-medium">Configuring permissions for: <span class="font-bold text-primary">Administrator</span></p>
                </div>
                <div class="flex gap-3">
                    <button class="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">Descartar</button>
                    <button class="px-5 py-2 text-sm font-black bg-primary text-white rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 transition-all">Guardar Cambios</button>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-50 dark:bg-slate-800/50">
                            <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 w-1/3">Module Name</th>
                            <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center border-l border-slate-100 dark:border-slate-800/50">View</th>
                            <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center border-l border-slate-100 dark:border-slate-800/50">Create</th>
                            <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center border-l border-slate-100 dark:border-slate-800/50">Edit</th>
                            <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center border-l border-slate-100 dark:border-slate-800/50">Delete</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                        <!-- Dashboard -->
                        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                            <td class="px-6 py-6">
                                <div class="flex items-center gap-3">
                                    <div class="size-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center">
                                        <span class="material-symbols-outlined !text-lg">dashboard</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-800 dark:text-white text-sm">Dashboard</p>
                                        <p class="text-[10px] text-slate-500 font-medium tracking-tight">Main overview and KPI tracking</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                        </tr>
                        <!-- Movements -->
                        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                            <td class="px-6 py-6">
                                <div class="flex items-center gap-3">
                                    <div class="size-9 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                                        <span class="material-symbols-outlined !text-lg">swap_horiz</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-800 dark:text-white text-sm">Movements</p>
                                        <p class="text-[10px] text-slate-500 font-medium tracking-tight">Transaction history and ledger</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                        </tr>
                        <!-- Budgets -->
                        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                            <td class="px-6 py-6">
                                <div class="flex items-center gap-3">
                                    <div class="size-9 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
                                        <span class="material-symbols-outlined !text-lg">account_balance_wallet</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-800 dark:text-white text-sm">Budgets</p>
                                        <p class="text-[10px] text-slate-500 font-medium tracking-tight">Fiscal planning and limits</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                        </tr>
                        <!-- Users -->
                        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                            <td class="px-6 py-6">
                                <div class="flex items-center gap-3">
                                    <div class="size-9 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                                        <span class="material-symbols-outlined !text-lg">group</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-800 dark:text-white text-sm">Users</p>
                                        <p class="text-[10px] text-slate-500 font-medium tracking-tight">Member management and invites</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                            <td class="px-6 py-6 text-center border-l border-slate-100 dark:border-slate-800/50"><input checked type="checkbox" class="size-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="p-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">info</span>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span class="font-black text-slate-700 dark:text-slate-300">Nota:</span> Los administradores tienen acceso permanente a todos los módulos para garantizar la integridad del sistema.
                </p>
            </div>
        </div>
    </div>
  `
})
export class RolesComponent { }
