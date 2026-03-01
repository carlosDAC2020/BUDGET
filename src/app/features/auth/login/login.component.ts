import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
      <!-- Background Decoration -->
      <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 w-full max-w-[480px]">
          <!-- Company Logo Section -->
          <div class="flex flex-col items-center mb-8">
              <div class="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <span class="material-symbols-outlined text-white text-4xl">account_balance_wallet</span>
              </div>
              <h2 class="text-primary font-bold text-3xl tracking-tighter italic">BUDGET</h2>
          </div>

          <!-- Login Card -->
          <div
              class="bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div class="p-8">
                  <div class="text-center mb-8">
                      <h1 class="text-[#121217] dark:text-white text-2xl font-black leading-tight">Welcome Back</h1>
                      <p class="text-slate-500 dark:text-slate-400 text-sm mt-2">Please enter your credentials to access
                          the budget portal.</p>
                  </div>

                  <form (submit)="onLogin($event)" class="space-y-5">
                      <!-- Username/Email Field -->
                      <div class="flex flex-col gap-1.5">
                          <label class="text-[#121217] dark:text-slate-200 text-sm font-semibold flex items-center gap-2">
                              <span class="material-symbols-outlined text-sm">person</span>
                              Email or Username
                          </label>
                          <div class="relative">
                              <input required
                                  class="form-input flex w-full rounded-lg text-[#121217] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 text-sm font-normal transition-all"
                                  placeholder="name@company.com" type="text" />
                          </div>
                      </div>

                      <!-- Password Field -->
                      <div class="flex flex-col gap-1.5">
                          <div class="flex justify-between items-center">
                              <label
                                  class="text-[#121217] dark:text-slate-200 text-sm font-semibold flex items-center gap-2">
                                  <span class="material-symbols-outlined text-sm">lock</span>
                                  Password
                              </label>
                              <a class="text-primary text-xs font-medium hover:underline" href="#">Forgot password?</a>
                          </div>
                          <div class="relative">
                              <input required
                                  class="form-input flex w-full rounded-lg text-[#121217] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-4 text-sm font-normal transition-all"
                                  placeholder="••••••••" type="password" />
                              <button class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" type="button">
                                  <span class="material-symbols-outlined text-[20px]">visibility_off</span>
                              </button>
                          </div>
                      </div>

                      <!-- Remember Me -->
                      <div class="flex items-center gap-2 py-1">
                          <input
                              class="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                              id="remember" type="checkbox" />
                          <label class="text-slate-600 dark:text-slate-400 text-sm" for="remember">Remember this
                              device</label>
                      </div>

                      <!-- Sign In Button -->
                      <button
                          class="w-full bg-primary hover:bg-primary/90 text-white font-black py-3.5 rounded-lg shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                          type="submit">
                          <span>Sign In</span>
                          <span class="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                  </form>

                  <!-- Secure Login Badge -->
                  <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                      <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-full">
                          <span class="material-symbols-outlined text-emerald-500 text-[18px]">verified_user</span>
                          <span
                              class="text-slate-500 dark:text-slate-400 text-[11px] font-bold tracking-wide uppercase">Secure
                              Enterprise SSL Encryption</span>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Footer -->
          <div class="mt-8 text-center flex flex-col gap-2">
              <p class="text-slate-400 dark:text-slate-500 text-xs font-medium">
                  © 2024 BUDGET Enterprise Systems. All rights reserved.
              </p>
              <div class="flex justify-center gap-4 text-xs font-medium">
                  <a class="text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                  <span class="text-slate-300">•</span>
                  <a class="text-slate-500 hover:text-primary transition-colors" href="#">Contact IT Support</a>
              </div>
          </div>
      </div>

      <!-- Background Subtle Office Imagery -->
      <div class="fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]">
          <div class="w-full h-full bg-cover bg-center"
              style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC15NhJ16wNucv6ElQ5-yln5E2Ylk_Coo-r5ePy782Z7kQP72SxQEEs5lynFArlQ4x0p5qnSeIct_Ngv28fO4aTi5X112JasfCcTVgUI_F9CEX8r1o96_N7DKqH-CaDq94XKy8EatwfOdym1ZMi19wfNSizLqAh_sY54i0qOIqmQLSm7vzGaxvr7lD4U-tdNhyw8I0VQm5BZtlUs2X689_mjWEBEtokrXmUYwBlv_jdQyQgDI_j7nPIPvnPL01enww3hNXPJjGss2M');">
          </div>
      </div>
    </div>
  `
})
export class LoginComponent {
    constructor(private router: Router) { }

    onLogin(event: Event) {
        event.preventDefault();
        this.router.navigate(['/dashboard']);
    }
}
