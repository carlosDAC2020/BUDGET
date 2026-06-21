import { Component, Input, OnInit } from '@angular/core';
import { CreatePartiesUseCase } from '../application/create-parties.usecase';
import { ListPartiesUseCase } from '../application/list-parties.usecase';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Party } from '../domain/parties.model';
import { UpdatePartiesUseCase } from '../application/update-parties.usecase';

@Component({
  selector: 'app-third-parties',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './parties.component.html'
})
export class PartiesComponent  implements OnInit {

  @Input() data?: Party;
  form!: FormGroup;
  isModalOpen = false;
  isSaving = false;
  isEdit = false;
  parties$!: Observable<Party[]>;

  constructor(
    private fb: FormBuilder,
    private createParties: CreatePartiesUseCase,
    private listParties: ListPartiesUseCase,
    private updateParties: UpdatePartiesUseCase
  ) {}

  ngOnInit(): void{
    this.initForm();
    this.loadParties();
  }

  initForm(){
    this.isEdit = !!this.data;
    this.form = this.fb.group({
      id_tercero: [this.data?.id_tercero || ''],
      tipo_documento: [this.data?.tipo_documento || '', Validators.required],
      numero_documento: [this.data?.numero_documento || '', Validators.required],
      nombre: [this.data?.nombre || '', Validators.required],
      direccion: [this.data?.direccion || null],
      telefono: [this.data?.telefono || null],
      email: [this.data?.email || null],
      is_active: [this.data?.is_active ?? true]
    });
  }

  loadParties() {
    this.parties$ = this.listParties.execute();
  }

  save(form: any) {
    this.createParties.execute(form).subscribe();
  }

  openModal(data?: Party) {
    this.isEdit = !!data;
  
    this.form.patchValue({
      id_tercero: data?.id_tercero || '',
      tipo_documento: data?.tipo_documento || '',
      numero_documento: data?.numero_documento || '',
      nombre: data?.nombre || '',
      direccion: data?.direccion || null,
      telefono: data?.telefono || null,
      email: data?.email || null,
      is_active: data?.is_active || false
    });
  
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
   
  editParties(party: Party) {
      this.openModal(party);
    }

  toggleStatus(party: Party) {
  
      const updated = {
      ...party,
      is_active: !party.is_active
    };
  
    this.updateParties.execute(party.id_tercero!.toString(), updated).subscribe(() => {
      this.loadParties();
    });
  }

}