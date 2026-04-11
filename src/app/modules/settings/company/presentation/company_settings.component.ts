import { Component, OnInit } from '@angular/core';
import { UpdateCompanyUseCase } from '../application/update_company.usecase';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Company } from '../domain/company.model';

@Component({
  selector: 'app_company_settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './company_settings.component.html'
})
export class CompanySettingsComponent implements OnInit {
  empresaForm!: FormGroup;
  selectedFile!: File;
  previewLogo: string = '';
  isSaving = false;

  constructor(private updateCompany: UpdateCompanyUseCase, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadCompanyInfo();
  }

  initForm(info: Company) {
    this.empresaForm = this.fb.group({
      nombre: [info.nombre],
      nit: [info.nit],
      direccion: [info.direccion],
      telefono: [info.telefono],
      email: [info.email],
      moneda_base: [info.moneda_base]
    });
  }

  loadCompanyInfo() {
    // Load company info and initialize form
    const companyInfo = { id:2, nombre: 'BUDGET Soluciones S.A.S', nit: '901.456.789-1', sitioWeb: 'www.budget.io', direccion: 'Calle 100 #15-32, Edificio Empresarial, Bogotá', telefono: '1234567890', email: 'info@budget.io', moneda_base: 'COP' };
    this.initForm(companyInfo);
    this.previewLogo = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjbAjCpITvPp-SLeC3-5Ox4fgOJnIloTmlk5HhH3fCivv4TDAMn6EfIx2SiY9TXb3UFoJLtDAUKr3LCtREK3MzfA9B00ivtO5TmiBJRyH7ZSMYI_sbMGpePP0jNwdrBpNhP0ldWwa9dua3NucJ76AEEr7NKrZWQGxVID1OcUEze2u-HFltc_S9juGwcQkeIgnPhf5pOZtxCkDUONCUgj-deQrEhJWAW1mSYOwUuNzjAKU6uSKNuAxYo0ue7esLfGYFPb1l2CThhVA';
  }

  save() {
    if (this.empresaForm.invalid || this.isSaving) return;

    this.isSaving = true;

    const formData = new FormData();
    const formValue = this.empresaForm.value;
    formData.append('id', '2'); 
    formData.append('nombre', formValue.nombre ?? '');
    formData.append('nit', formValue.nit?? '');
    formData.append('direccion', formValue.direccion?? '');
    formData.append('telefono', formValue.telefono?? '');
    formData.append('email', formValue.email?? '');
    formData.append('moneda_base', formValue.moneda_base?? '');

    if (this.selectedFile) {
      formData.append('logo', this.selectedFile);
    }

    this.updateCompany.execute(formData).subscribe({
    next: () => {
      console.log('Guardado correctamente');
      this.isSaving = false;
    },
    error: (err) => {
      console.error(err);
      this.isSaving = false;
    }
  });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewLogo = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}