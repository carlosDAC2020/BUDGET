import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SaveVoucherUseCase } from '../../../application/save-voucher.usecase';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionConfig, FieldConfig, ListVoucher } from '../../../domain/voucher.model';
import { PRODUCT_CONFIG } from '../../../config/vouchers-config';
import { VoucherType } from '../../../domain/enums/voucher-type.enum';
import { ActivatedRoute } from '@angular/router';
import { VoucherTemplateService } from '../../services/voucher-template.service';
import { VoucherListModal } from '../modals/voucher-list-modal/voucher-list-modal';
import { Observable, shareReplay } from 'rxjs';
import { ListAccountUseCase } from '../../../../account/application/list-account.usecase';
import { ListCenterCostUseCase } from '../../../../center_cost/application/list-center-cost.usecase';
import { Account } from '../../../../account/domain/account.model';
import { CenterCost } from '../../../../center_cost/domain/centerCost.model';
import { listVoucherUseCase } from '../../../application/list-voucher.usecase';
import { ListPartiesUseCase } from '../../../../../settings/thirdparties/application/list-parties.usecase';
import { Party } from '../../../../../settings/thirdparties/domain/parties.model';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, VoucherListModal],
  styleUrls: ['./voucher.component.css'],
  templateUrl: './voucher.component.html'
})
export class VoucherComponent implements OnInit {

  tipoProducto!: VoucherType;
  sections: SectionConfig[] = [];
  form!: FormGroup;
  page = 1;
  pageSize = 4;
  private componentRef: any;
  private formsCache = new Map<VoucherType, { form: FormGroup, sections: SectionConfig[] }>();
  showPreviewModal = false;
  showVoucherListModal = false;

  vouchers$!: Observable<ListVoucher[]>;
  parties$!: Observable<Party[]>;
  accounts$!: Observable<Account[]>;
  centerCost$!: Observable<CenterCost[]>;

  accounts: Account[] = [];
  parties: Party[] = [];
  centers: CenterCost[] = [];
  showAccountDropdown: Record<number, boolean> = {};
  showPartyDropdown: Record<number, boolean> = {};
  showCenterDropdown: Record<number, boolean> = {};

  @ViewChild('container', {
    read: ViewContainerRef,
    static: false
  })

  container!: ViewContainerRef;

  constructor(
    private fb: FormBuilder,
    private saveVoucher: SaveVoucherUseCase,
    private route: ActivatedRoute,
    private templateService: VoucherTemplateService,
    private listAccounts: ListAccountUseCase,
    private listCenterCosts: ListCenterCostUseCase,
    private listVouchers: listVoucherUseCase,
    private listParties: ListPartiesUseCase
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tipoProducto = data['tipo'];
      this.initForm();
    });
  }

  private initForm() {
    console.log("Inicializando formulario para tipo:", this.tipoProducto);
    this.loadServices();
    if (this.formsCache.has(this.tipoProducto)) {
      const cached = this.formsCache.get(this.tipoProducto)!;
      this.form = cached.form;
      this.sections = cached.sections;
      return;
    }

    this.sections = PRODUCT_CONFIG[this.tipoProducto] || [];
    const allFields = this.sections.flatMap(s => s.fields);
    this.buildForm(allFields);
    this.formsCache.set(this.tipoProducto, {
      form: this.form,
      sections: this.sections
    });
  }

  loadServices() {
    this.listAccounts.execute().subscribe(data => {
      this.accounts = data;
    });

    this.listParties.execute().subscribe(data => {
      this.parties = data;
    });

    this.listCenterCosts.execute().subscribe(data => {
      this.centers = data;
    });
    this.vouchers$ = this.listVouchers.execute().pipe(shareReplay(1));
    this.accounts$ = this.listAccounts.execute().pipe(shareReplay(1));
    this.centerCost$ = this.listCenterCosts.execute().pipe(shareReplay(1));
    this.parties$ = this.listParties.execute().pipe(shareReplay(1));
  }

  getSection(name: 'header' | 'detail' | 'footer') {
    return this.sections.find(s => s.section === name)?.fields || [];
  }

  getField(name: string): FieldConfig | undefined {
    return this.sections
      .flatMap(s => s.fields)
      .find(f => f.name === name);
  }

  private buildForm(fields: FieldConfig[]) {
    const group: Record<string, any> = {};

    fields.forEach(field => {
      if (!group[field.name]) {
        group[field.name] = [
          field.defaultValue ?? '',
          field.required ? Validators.required : []
        ];
      }
    });

    group['asientos'] = this.fb.array([]);
    this.form = this.fb.group(group);
  }

  get asientos(): FormArray<FormGroup> {
    return this.form.get('asientos') as FormArray<FormGroup>;
  }

  addAsiento() {
  for (let i = 0; i < this.pageSize; i++) {
    const asiento: FormGroup = this.fb.group({
      cuenta: [''],
      concepto: [''],
      tercero: [''],
      centro: [''],
      debito: [0],
      credito: [0],
      interes: ['']
    });
    this.asientos.push(asiento);
  }
  this.page = this.totalPages;
}

  removeAsiento(index: number) {
    this.asientos.removeAt(index);
  }

  save() {
    console.log("function to save:", this.form.invalid, this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      tipoProducto: this.tipoProducto,
      ...this.form.value
    };

    console.log("Payload to save:", payload);
    this.saveVoucher.execute(payload).subscribe();
  }

  print() {
      this.showPreviewModal = true;
      setTimeout(() => {
        if (!this.container) return;
        this.container.clear();
        this.componentRef?.destroy();
        const component = this.templateService.getTemplate(this.tipoProducto);

        if (!component) {
          console.error('Template no encontrado');
          return;
        }

        this.componentRef = this.container.createComponent(component);

        this.componentRef.instance.data = {
          numero: 'FV-001',
          fecha: new Date(),
          cliente: {
            nombre: 'Juan Pérez',
            documento: '123456789',
            direccion: 'Cartagena',
            telefono: '3001234567'
          },

          detalle: [
            {
              descripcion: 'Laptop Lenovo',
              cantidad: 1,
              precio: 2500000,
              total: 2500000
            }
          ],

          subtotal: 2500000,
          iva: 475000,
          total: 2975000
        };
      });
    }

  closePreviewModal() {
    this.showPreviewModal = false;
    this.container?.clear();
    this.componentRef?.destroy();
  }

  closeSearchModal() {
    this.showVoucherListModal = false;
  }

  search() {
    this.showVoucherListModal = true;
  }

  copy() {
    // Implementation for copy functionality
  }


  get isDescuadrado(): boolean {
    return this.diferencia !== 0;
  }

  get totalDebito(): number {
  return this.asientos.controls
    .map(a => {
      const val = a.get('debito')?.value || 0;
      return Number(val.toString().replace(/\./g, '').replace(/,/g, '')) || 0;
    })
    .reduce((a, b) => a + b, 0);
}

  get totalCredito(): number {
    return this.asientos.controls
      .map(a => {
        const val = a.get('credito')?.value || 0;
        return Number(val.toString().replace(/\./g, '').replace(/,/g, '')) || 0;
      })
      .reduce((a, b) => a + b, 0);
  }

  get diferencia(): number {
    return (this.totalDebito || 0) - (this.totalCredito || 0);
  }

  formatMoney(index: number, field: 'debito' | 'credito') {
    const control = this.asientos.at(index).get(field);
    if (!control) return;

    let value = control.value || '';
    value = value.toString().replace(/\D/g, '');

    if (!value) {
      control.setValue(0, { emitEvent: false });
      return;
    }

    const numeric = Number(value);
    const formatted = numeric.toLocaleString('es-CO');
    control.setValue(formatted, { emitEvent: false });
  }

  get paginatedAsientos(): { control: FormGroup; index: number }[] {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    return (this.asientos.controls as FormGroup[])
      .slice(start, end)
      .map((control, i) => ({
        control,
        index: start + i
      }));
  }

  trackByIndex(index: number, item: any): number {
    return item.index;
  }

  unformat(index: number, field: 'debito' | 'credito') {
  const control = this.asientos.at(index).get(field);
  if (!control) return;

  let value = control.value || '';
  value = value.toString().replace(/\./g, '').replace(/,/g, '');
  control.setValue(value, { emitEvent: false });
}

  get totalPages(): number {
    return Math.ceil(this.asientos.length / this.pageSize);
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  filterAccounts(index: number): Account[] {

    const value =
      this.asientos.at(index).get('cuenta')?.value?.toLowerCase() || '';

    return this.accounts.filter(a =>
      a.nombre?.toLowerCase().includes(value) ||
      a.codigo?.toLowerCase().includes(value)
    ).slice(0, 10);
 }

 filterParties(index: number): Party[] {

    const value =
      this.asientos.at(index).get('tercero')?.value?.toLowerCase() || '';

    return this.parties.filter(p =>
      p.nombre?.toLowerCase().includes(value) ||
      p.numero_documento?.toLowerCase().includes(value)
    ).slice(0, 10);

  }

  filterCenters(index: number): CenterCost[] {

    const value =
      this.asientos.at(index).get('centro')?.value?.toLowerCase() || '';

    return this.centers.filter(c =>
      c.nombre?.toLowerCase().includes(value)
    ).slice(0, 10);

  }

  selectAccount(index: number, account: Account) {

  this.asientos.at(index).patchValue({
    cuenta: account.codigo
  });

  this.showAccountDropdown[index] = false;
}

selectParty(index: number, party: Party) {

  this.asientos.at(index).patchValue({
    tercero: party.id_tercero
  });

  this.showPartyDropdown[index] = false;
}

selectCenter(index: number, center: CenterCost) {

  this.asientos.at(index).patchValue({
    centro: center.id
  });

  this.showCenterDropdown[index] = false;
}

}