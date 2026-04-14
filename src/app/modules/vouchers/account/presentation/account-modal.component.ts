import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../domain/account.model';
import { CreateAccountUseCase } from '../application/create-account.usecase';
import { UpdateAccountUseCase } from '../application/update-account.usecase';
import { ListAccountUseCase } from '../application/list-account.usecase';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './account-modal.component.html'
})

export class AccountModalComponent implements OnInit {

  @Input() data?: Account;
  form!: FormGroup;
  isModalOpen = false;
  isSaving = false;
  isEdit = false;
  accounts$!: Observable<Account[]>;

  constructor(
    private fb: FormBuilder,
    private createAccount: CreateAccountUseCase,
    private updateAccount: UpdateAccountUseCase,
    private listAccount: ListAccountUseCase
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadAccounts();
  }

  initForm(){
    this.isEdit = !!this.data;
    this.form = this.fb.group({
      codigo: [this.data?.codigo || '', Validators.required],
      nombre: [this.data?.nombre || '', Validators.required],
      tipo: [this.data?.tipo || '', Validators.required],
      nivel: [this.data?.nivel || 1, Validators.required],
      id_padre: [this.data?.id_padre || null],
      is_active: [this.data?.is_active ?? true]
    });
  }

  loadAccounts() {
    this.accounts$ = this.listAccount.execute();
  }

  editAccount(account: Account) {
    this.openModal(account);
  }

  toggleStatus(account: Account) {

    const updated = {
    ...account,
    is_active: !account.is_active
  };

  this.updateAccount.execute(updated).subscribe(() => {
    this.loadAccounts();
  });
  }

  openModal(data?: Account) {
  this.isEdit = !!data;

  this.form.patchValue({
    codigo: data?.codigo || '',
    nombre: data?.nombre || '',
    tipo: data?.tipo || '',
    nivel: data?.nivel || 1,
    id_padre: data?.id_padre || null,
    is_active: data?.is_active ?? true
  });

  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}

save() {
  if (this.form.invalid) return;

  this.isSaving = true;

  const payload: Account = {
    ...this.form.value
  };

  const request = this.isEdit
    ? this.updateAccount.execute(payload)
    : this.createAccount.execute(payload);

  request.subscribe({
    next: () => {
      this.isSaving = false;
      this.loadAccounts();
      this.closeModal();
    },
    error: () => {
      this.isSaving = false;
    }
  });
}
}