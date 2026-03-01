import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-company-settings',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="grid grid-cols-1 gap-12 py-8">
        <!-- Section 1: Empresa -->
        <section class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 space-y-6">
                    <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <span class="material-symbols-outlined">business</span>
                            </div>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Perfil de la Empresa</h3>
                        </div>
                        <div class="grid grid-cols-1 gap-6">
                            <div>
                                <label class="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Nombre de la Empresa</label>
                                <input class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    type="text" value="BUDGET Soluciones S.A.S" />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">NIT</label>
                                    <input class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        type="text" value="901.456.789-1" />
                                </div>
                                <div>
                                    <label class="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Sitio Web</label>
                                    <input class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        type="text" value="www.budget.io" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Dirección Corporativa</label>
                                <input class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    type="text" value="Calle 100 #15-32, Edificio Empresarial, Bogotá" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
                    <label class="block text-xs font-black text-slate-500 uppercase tracking-widest w-full text-left mb-2">Logo Corporativo</label>
                    <div class="size-40 bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center overflow-hidden relative group">
                        <div class="bg-cover bg-center w-full h-full"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjbAjCpITvPp-SLeC3-5Ox4fgOJnIloTmlk5HhH3fCivv4TDAMn6EfIx2SiY9TXb3UFoJLtDAUKr3LCtREK3MzfA9B00ivtO5TmiBJRyH7ZSMYI_sbMGpePP0jNwdrBpNhP0ldWwa9dua3NucJ76AEEr7NKrZWQGxVID1OcUEze2u-HFltc_S9juGwcQkeIgnPhf5pOZtxCkDUONCUgj-deQrEhJWAW1mSYOwUuNzjAKU6uSKNuAxYo0ue7esLfGYFPb1l2CThhVA')">
                        </div>
                        <div class="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                            <span class="material-symbols-outlined text-white text-3xl">add_a_photo</span>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <button class="text-sm font-black text-primary hover:underline">Subir nuevo logo</button>
                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">PNG o SVG | MAX 2MB</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Actions -->
        <div class="flex items-center justify-end gap-3 pb-8">
            <button class="px-6 py-2.5 text-sm font-black text-slate-600 hover:text-slate-900 transition-colors">Restablecer Valores</button>
            <button class="bg-primary text-white px-10 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-all shadow-xl shadow-primary/20">Guardar Cambios</button>
        </div>
    </div>
  `
})
export class CompanySettingsComponent { }
