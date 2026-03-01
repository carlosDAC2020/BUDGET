import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'budgets', loadComponent: () => import('./features/budgets/budget.component').then(m => m.BudgetComponent) },
            {
                path: 'users',
                loadComponent: () => import('./features/users/user-management.component').then(m => m.UserManagementComponent),
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', loadComponent: () => import('./features/users/users.component').then(m => m.UsersComponent) },
                    { path: 'roles', loadComponent: () => import('./features/users/roles.component').then(m => m.RolesComponent) },
                    { path: 'modules', loadComponent: () => import('./features/users/modules.component').then(m => m.ModulesComponent) },
                ]
            },
            {
                path: 'settings',
                loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent),
                children: [
                    { path: '', redirectTo: 'company', pathMatch: 'full' },
                    { path: 'company', loadComponent: () => import('./features/settings/company-settings.component').then(m => m.CompanySettingsComponent) },
                    { path: 'preferences', loadComponent: () => import('./features/settings/preference-settings.component').then(m => m.PreferenceSettingsComponent) },
                    { path: 'security', loadComponent: () => import('./features/settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
                    { path: 'notifications', loadComponent: () => import('./features/settings/notification-settings.component').then(m => m.NotificationSettingsComponent) },
                ]
            },
            {
                path: 'movements',
                loadComponent: () => import('./features/movements/movements-management.component').then(m => m.MovementsManagementComponent),
                children: [
                    { path: '', redirectTo: 'sales-invoice', pathMatch: 'full' },
                    { path: 'sales-invoice', loadComponent: () => import('./features/movements/sales-invoice.component').then(m => m.SalesInvoiceComponent) },
                    { path: 'purchase-invoice', loadComponent: () => import('./features/movements/purchase-invoice.component').then(m => m.PurchaseInvoiceComponent) },
                    { path: 'payroll', loadComponent: () => import('./features/movements/payroll.component').then(m => m.PayrollComponent) },
                    { path: 'cash-receipt', loadComponent: () => import('./features/movements/cash-receipt.component').then(m => m.CashReceiptComponent) },
                    { path: 'payment-voucher', loadComponent: () => import('./features/movements/payment-voucher.component').then(m => m.PaymentVoucherComponent) },
                    { path: 'bank-deposit', loadComponent: () => import('./features/movements/bank-deposit.component').then(m => m.BankDepositComponent) },
                    { path: 'accounting-note', loadComponent: () => import('./features/movements/accounting-note.component').then(m => m.AccountingNoteComponent) },
                ]
            },
            // Other features will go here
        ]
    },
    { path: '**', redirectTo: 'login' }
];
