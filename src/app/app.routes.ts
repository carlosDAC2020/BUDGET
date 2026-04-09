import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/presentation/login.component';
import { MainLayoutComponent } from './modules/main-layout/main-layout.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadComponent: () => import('./modules/dashboard/presentation/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'budgets', loadComponent: () => import('./modules/budgets/presentation/budget.component').then(m => m.BudgetComponent) },
            {
                path: 'users',
                loadComponent: () => import('./modules/users/user_management/presentation/user_management.component').then(m => m.UserManagementComponent),
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', loadComponent: () => import('./modules/users/users/presentation/users.component').then(m => m.UsersComponent) },
                    { path: 'roles', loadComponent: () => import('./modules/users/roles/presentation/roles.component').then(m => m.RolesComponent) },
                    { path: 'modules', loadComponent: () => import('./modules/users/modules/presentation/modules.component').then(m => m.ModulesComponent) },
                ]
            },
            {
                path: 'settings',
                loadComponent: () => import('./modules/settings/settings/presentation/settings.component').then(m => m.SettingsComponent),
                children: [
                    { path: '', redirectTo: 'company', pathMatch: 'full' },
                    { path: 'company', loadComponent: () => import('./modules/settings/company/presentation/company_settings.component').then(m => m.CompanySettingsComponent) },
                    { path: 'preferences', loadComponent: () => import('./modules/settings/preference/presentation/preference_settings.component').then(m => m.PreferenceComponent) },
                    { path: 'security', loadComponent: () => import('./modules/settings/security/presentation/security_settings.component').then(m => m.SecurityComponent) },
                    { path: 'notifications', loadComponent: () => import('./modules/settings/notification/presentation/notification_settings.component').then(m => m.notificationSettingsComponent) },
                ]
            },
            {
                path: 'vouchers',
                loadComponent: () => import('./modules/vouchers/movements_management/presentation/movements_management.component').then(m => m.MovementsManagementComponent),
                children: [
                    { path: '', redirectTo: 'sales-invoice', pathMatch: 'full' },
                    { path: 'sales-invoice', loadComponent: () => import('./modules/vouchers/sales_invoice/presentation/sales_invoice.component').then(m => m.SalesInvoiceComponent) },
                    { path: 'purchase-invoice', loadComponent: () => import('./modules/vouchers/purchase_invoice/presentation/purchase_invoice.component').then(m => m.PurchaseInvoiceComponent) },
                    { path: 'payroll', loadComponent: () => import('./modules/vouchers/payroll/presentation/payroll.component').then(m => m.PayrollComponent) },
                    { path: 'cash-receipt', loadComponent: () => import('./modules/vouchers/cash_receipt/presentation/cash_receipt.component').then(m => m.CashReceiptComponent) },
                    { path: 'payment-voucher', loadComponent: () => import('./modules/vouchers/payment_voucher/presentation/payment_voucher.component').then(m => m.PaymentVoucherComponent) },
                    { path: 'bank-deposit', loadComponent: () => import('./modules/vouchers/bank_deposit/presentation/bank_deposit.component').then(m => m.BankDepositComponent) },
                    { path: 'accounting-note', loadComponent: () => import('./modules/vouchers/accounting_note/presentation/accounting_note.component').then(m => m.AccountingNoteComponent) },
                ]
            },
            // Other features will go here
        ]
    },
    { path: '**', redirectTo: 'login' }
];
