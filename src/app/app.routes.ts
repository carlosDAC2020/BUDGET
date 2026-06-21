import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/presentation/login.component';
import { MainComponent } from './modules/main/presentation/main.component';
import { VoucherType } from './modules/contable/vouchers/domain/enums/voucher-type.enum';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadComponent: () => import('./modules/dashboard/presentation/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'budgets', loadComponent: () => import('./modules/budgets/presentation/budget.component').then(m => m.BudgetComponent) },
            {
                path: 'users',
                loadComponent: () => import('./modules/users/user_management/presentation/user-management.component').then(m => m.UserManagementComponent),
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', loadComponent: () => import('./modules/users/users/presentation/users.component').then(m => m.UsersComponent) },
                    { path: 'roles', loadComponent: () => import('./modules/users/roles/presentation/roles.component').then(m => m.RolesComponent) },
                ]
            },
            {
                path: 'administration',
                loadComponent: () => import('./modules/settings/settings/presentation/settings.component').then(m => m.SettingsComponent),
                children: [
                    { path: '', redirectTo: 'company', pathMatch: 'full' },
                    { path: 'company', loadComponent: () => import('./modules/settings/company/presentation/company_settings.component').then(m => m.CompanySettingsComponent) },
                    { path: 'preferences', loadComponent: () => import('./modules/settings/preference/presentation/preference_settings.component').then(m => m.PreferenceComponent) },
                    { path: 'security', loadComponent: () => import('./modules/settings/security/presentation/security_settings.component').then(m => m.SecurityComponent) },
                    { path: 'notifications', loadComponent: () => import('./modules/settings/notification/presentation/notification_settings.component').then(m => m.notificationSettingsComponent) },
                    { path: 'third-parties', loadComponent: () => import('./modules/settings/thirdparties/presentation/parties.component').then(m => m.PartiesComponent) },
                ]
            },
            {
                path: 'vouchers',
                loadComponent: () => import('./modules/contable/movements_management/presentation/movements_management.component').then(m => m.MovementsManagementComponent),
                children: [
                    { path: '', redirectTo: 'sales-invoice', pathMatch: 'full' },
                    { path: 'sales-invoice', loadComponent: () => import('./modules/contable/vouchers/presentation/components/voucher/voucher.component').then(m => m.VoucherComponent), data: { tipo: VoucherType.SALES_INVOICE }},
                    { path: 'payroll', loadComponent: () => import('./modules/contable/vouchers/presentation/components/voucher/voucher.component').then(m => m.VoucherComponent), data: { tipo: VoucherType.PAYROLL }},
                    { path: 'purchase-invoice', loadComponent: () => import('./modules/contable/vouchers/presentation/components/voucher/voucher.component').then(m => m.VoucherComponent), data: { tipo: VoucherType.PURCHASE_INVOICE }},
                    { path: 'cash-receipt', loadComponent: () => import('./modules/contable/vouchers/presentation/components/voucher/voucher.component').then(m => m.VoucherComponent), data: { tipo: VoucherType.CASH_RECEIPT }},
                    { path: 'payment-voucher', loadComponent: () => import('./modules/contable/vouchers/presentation/components/voucher/voucher.component').then(m => m.VoucherComponent), data: { tipo: VoucherType.PAYMENT_VOUCHER }},
                    { path: 'bank-deposit', loadComponent: () => import('./modules/contable/vouchers/presentation/components/voucher/voucher.component').then(m => m.VoucherComponent), data: { tipo: VoucherType.BANK_DEPOSIT }},
                    { path: 'accounting-note', loadComponent: () => import('./modules/contable/vouchers/presentation/components/voucher/voucher.component').then(m => m.VoucherComponent), data: { tipo: VoucherType.ACCOUNTING_NOTE }},
                    { path: 'accounts', loadComponent: () => import('./modules/contable/account/presentation/account-modal.component').then(m => m.AccountModalComponent) },
                    { path: 'period', loadComponent: () => import('./modules/contable/period/presentation/period.component').then(m => m.PeriodComponent) },
                    { path: 'center-cost', loadComponent: () => import('./modules/contable/center_cost/presentation/center_cost.component').then(m => m.CenterCostComponent) },
                ]
            },
        ]
    },
    { path: '**', redirectTo: 'login' }
];
