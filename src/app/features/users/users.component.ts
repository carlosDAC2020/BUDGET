import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <!-- User Table Section -->
        <div class="xl:col-span-2 space-y-4">
            <div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div class="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-wrap gap-4 items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Active Users</span>
                        <span class="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">128 Total</span>
                    </div>
                    <div class="flex gap-2">
                        <select class="text-xs border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg focus:ring-primary focus:border-primary">
                            <option>Filter by Role</option>
                            <option>Admin</option>
                            <option>Editor</option>
                            <option>Viewer</option>
                        </select>
                        <select class="text-xs border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg focus:ring-primary focus:border-primary">
                            <option>Status: All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th class="px-6 py-4">User</th>
                                <th class="px-6 py-4">Roles</th>
                                <th class="px-6 py-4">Status</th>
                                <th class="px-6 py-4">Last Login</th>
                                <th class="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <!-- User Row 1 -->
                            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-100 dark:border-slate-600">
                                            <img class="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE6An1bzUA9AC6MryLQhHZ0GWjVzm_owSoYnDVLHqr5_y88xBW4tGIRh470BBeV14frrh6Nj3aXM3-nqpdMo8OdZc7pCDIxNEDqP5O6ja26mvQC9CS1-zrUnBDNQp15cWSaNFF-UKCfS1CGNVvsHD25pxGoqhB5_SRrkPHS6LSsnMnIGPEdCfzFBtNfCIjQucd0Vr2DKX5hZck-1abTMJD5jcW95UtMmgUIHlHXE0qh9jqLhxmpOUz9yxL7bgaB2Ta5IAtR3CQmG8" />
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Jane Cooper</p>
                                            <p class="text-xs text-slate-500 dark:text-slate-400">jane.cooper@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex flex-wrap gap-1">
                                        <span class="text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded uppercase">Admin</span>
                                        <span class="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded uppercase">Editor</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        <span class="size-1.5 rounded-full bg-emerald-600"></span> Active
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">2 hours ago</td>
                                <td class="px-6 py-4 text-right">
                                    <div class="flex justify-end gap-2">
                                        <button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-md transition-colors">
                                            <span class="material-symbols-outlined text-lg">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <!-- User Row 2 -->
                            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-100 dark:border-slate-600">
                                            <img class="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE6An1bzUA9AC6MryLQhHZ0GWjVzm_owSoYnDVLHqr5_y88xBW4tGIRh470BBeV14frrh6Nj3aXM3-nqpdMo8OdZc7pCDIxNEDqP5O6ja26mvQC9CS1-zrUnBDNQp15cWSaNFF-UKCfS1CGNVvsHD25pxGoqhB5_SRrkPHS6LSsnMnIGPEdCfzFBtNfCIjQucd0Vr2DKX5hZck-1abTMJD5jcW95UtMmgUIHlHXE0qh9jqLhxmpOUz9yxL7bgaB2Ta5IAtR3CQmG8" />
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Cody Fisher</p>
                                            <p class="text-xs text-slate-500 dark:text-slate-400">c.fisher@company.net</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex flex-wrap gap-1">
                                        <span class="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded uppercase">Viewer</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        <span class="size-1.5 rounded-full bg-emerald-600"></span> Active
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">Yesterday</td>
                                <td class="px-6 py-4 text-right">
                                    <div class="flex justify-end gap-2">
                                        <button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-md transition-colors">
                                            <span class="material-symbols-outlined text-lg">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <!-- User Row 3 -->
                            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-100 dark:border-slate-600">
                                            <img class="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE6An1bzUA9AC6MryLQhHZ0GWjVzm_owSoYnDVLHqr5_y88xBW4tGIRh470BBeV14frrh6Nj3aXM3-nqpdMo8OdZc7pCDIxNEDqP5O6ja26mvQC9CS1-zrUnBDNQp15cWSaNFF-UKCfS1CGNVvsHD25pxGoqhB5_SRrkPHS6LSsnMnIGPEdCfzFBtNfCIjQucd0Vr2DKX5hZck-1abTMJD5jcW95UtMmgUIHlHXE0qh9jqLhxmpOUz9yxL7bgaB2Ta5IAtR3CQmG8" />
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold text-slate-900 dark:text-slate-100">Leslie Alexander</p>
                                            <p class="text-xs text-slate-500 dark:text-slate-400">leslie.alex@domain.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex flex-wrap gap-1">
                                        <span class="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded uppercase">Manager</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                        <span class="size-1.5 rounded-full bg-slate-400"></span> Inactive
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">2 weeks ago</td>
                                <td class="px-6 py-4 text-right">
                                    <div class="flex justify-end gap-2">
                                        <button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-md transition-colors">
                                            <span class="material-symbols-outlined text-lg">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination -->
                <div class="p-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span class="text-xs text-slate-500 font-medium">Showing 1 to 10 of 128 results</span>
                    <div class="flex items-center gap-1">
                        <button class="p-1.5 rounded border border-slate-200 dark:border-slate-700 text-slate-400 disabled:opacity-50 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span class="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <button class="size-8 rounded bg-primary text-white text-xs font-bold shadow-sm">1</button>
                        <button class="size-8 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
                        <button class="size-8 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">3</button>
                        <button class="p-1.5 rounded border border-slate-200 dark:border-slate-700 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span class="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Module Access Matrix -->
            <div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">Module Access Matrix</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Quick view of permissions for the selected role: <span class="text-primary font-bold">Admin</span></p>
                </div>
                <div class="p-0">
                    <table class="w-full text-left">
                        <thead class="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] uppercase font-bold text-slate-400 tracking-widest border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th class="px-6 py-3">Module Name</th>
                                <th class="px-6 py-3 text-center">Read</th>
                                <th class="px-6 py-3 text-center">Write</th>
                                <th class="px-6 py-3 text-center">Delete</th>
                                <th class="px-6 py-3 text-center">Export</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="size-8 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-slate-500 dark:text-slate-400">
                                            <span class="material-symbols-outlined text-lg">inventory_2</span>
                                        </div>
                                        <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">Inventory Management</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="size-8 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-slate-500 dark:text-slate-400">
                                            <span class="material-symbols-outlined text-lg">analytics</span>
                                        </div>
                                        <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">Analytics Reports</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="size-8 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-slate-500 dark:text-slate-400">
                                            <span class="material-symbols-outlined text-lg">receipt_long</span>
                                        </div>
                                        <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">Billing & Payroll</span>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-center"><input checked class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                                <td class="px-6 py-4 text-center"><input class="rounded border-slate-300 dark:border-slate-600 text-primary h-4 w-4 bg-white dark:bg-slate-800" type="checkbox" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Right Panel: Forms -->
        <div class="space-y-6">
            <div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 bg-primary/5 dark:bg-primary/10">
                    <h3 class="text-lg font-bold text-primary">New User Account</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Setup basic credentials and roles.</p>
                </div>
                <div class="p-6 space-y-5">
                    <div class="space-y-1">
                        <label class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Full Name</label>
                        <input class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm p-2.5 focus:border-primary focus:ring-primary/20" placeholder="e.g. John Doe" type="text" />
                    </div>
                    <div class="space-y-1">
                        <label class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Email Address</label>
                        <input class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm p-2.5 focus:border-primary focus:ring-primary/20" placeholder="name@company.com" type="email" />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Username</label>
                            <input class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm p-2.5 focus:border-primary focus:ring-primary/20" placeholder="jdoe" type="text" />
                        </div>
                        <div class="space-y-1">
                            <label class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Password</label>
                            <input class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm p-2.5 focus:border-primary focus:ring-primary/20" placeholder="••••••••" type="password" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">Assign Roles</label>
                        <div class="grid grid-cols-2 gap-3">
                            <label class="flex items-center gap-2 p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group">
                                <input class="text-primary focus:ring-primary rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all" type="checkbox" />
                                <span class="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Admin</span>
                            </label>
                            <label class="flex items-center gap-2 p-2.5 border-primary border bg-primary/5 rounded-xl cursor-pointer transition-all group">
                                <input checked class="text-primary focus:ring-primary rounded border-primary bg-white dark:bg-slate-800" type="checkbox" />
                                <span class="text-xs font-bold text-primary">Editor</span>
                            </label>
                            <label class="flex items-center gap-2 p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group">
                                <input class="text-primary focus:ring-primary rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all" type="checkbox" />
                                <span class="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Billing</span>
                            </label>
                            <label class="flex items-center gap-2 p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group">
                                <input class="text-primary focus:ring-primary rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all" type="checkbox" />
                                <span class="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Support</span>
                            </label>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 py-2">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input checked class="sr-only peer" type="checkbox" value="" />
                            <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                        </label>
                        <span class="text-sm font-bold text-slate-700 dark:text-slate-300">Active Account</span>
                    </div>
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button class="w-full px-6 py-3 bg-primary text-white rounded-xl font-black text-sm shadow-lg shadow-primary/30 hover:opacity-95 transition-all transform hover:-translate-y-0.5">Create User</button>
                    </div>
                </div>
            </div>

            <!-- Role Distribution Card -->
            <div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
                <div class="flex items-center justify-between">
                    <h4 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Role Distribution</h4>
                    <span class="material-symbols-outlined text-slate-400 text-lg">info</span>
                </div>
                <div class="space-y-4">
                    <div class="space-y-1.5">
                        <div class="flex justify-between text-xs font-bold">
                            <span class="text-slate-500 dark:text-slate-400">Administrators</span>
                            <span class="text-slate-900 dark:text-white">12</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div class="bg-primary h-full rounded-full w-[10%]"></div>
                        </div>
                    </div>
                    <div class="space-y-1.5">
                        <div class="flex justify-between text-xs font-bold">
                            <span class="text-slate-500 dark:text-slate-400">Editors</span>
                            <span class="text-slate-900 dark:text-white">45</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div class="bg-primary/60 h-full rounded-full w-[35%]"></div>
                        </div>
                    </div>
                    <div class="space-y-1.5">
                        <div class="flex justify-between text-xs font-bold">
                            <span class="text-slate-500 dark:text-slate-400">Viewers / Customers</span>
                            <span class="text-slate-900 dark:text-white">71</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div class="bg-primary/30 h-full rounded-full w-[55%]"></div>
                        </div>
                    </div>
                </div>
                <button class="w-full py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">Manage All Roles</button>
            </div>
        </div>
    </div>
  `
})
export class UsersComponent { }
