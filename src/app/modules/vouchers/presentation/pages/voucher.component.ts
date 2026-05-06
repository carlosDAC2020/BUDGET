import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SaveVoucherUseCase } from '../../application/save-voucher.usecase';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionConfig, FieldConfig } from '../../domain/voucher.model';
import { PRODUCT_CONFIG } from '../../config/vouchers-config';
import { VoucherType } from '../../domain/enums/voucher-type.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./voucher.component.css'],
  templateUrl: './voucher.component.html'
})
export class VoucherComponent implements OnInit {

  tipoProducto!: VoucherType;
  sections: SectionConfig[] = [];
  form!: FormGroup;
  page = 1;
  pageSize = 4;

  private formsCache = new Map<VoucherType, { form: FormGroup, sections: SectionConfig[] }>();

  constructor(
    private fb: FormBuilder,
    private saveVoucher: SaveVoucherUseCase,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tipoProducto = data['tipo'];
      this.initForm();
    });
  }

  private initForm() {

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
    const asiento: FormGroup  = this.fb.group({
      cuenta: [''],
      concepto: [''],
      tercero: [''],
      centro: [''],
      debito: [0],
      credito: [0],
      interes: ['']
    });

    this.asientos.push(asiento);

    this.page = this.totalPages;
  }

  removeAsiento(index: number) {
    this.asientos.removeAt(index);
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      tipoProducto: this.tipoProducto,
      ...this.form.value
    };

    this.saveVoucher.execute(payload).subscribe();
  }

  print() {
    window.print();
  }

  search() {
    // Implementation for search functionality
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

    // limpiar
    value = value.toString().replace(/\D/g, '');

    if (!value) {
      control.setValue(0, { emitEvent: false });
      return;
    }

    const numeric = Number(value);

    // formatear a miles estilo colombiano
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

  // quitar separadores de miles
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
}