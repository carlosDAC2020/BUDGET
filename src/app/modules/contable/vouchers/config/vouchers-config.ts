import { VoucherType } from "../domain/enums/voucher-type.enum";
import { SectionConfig } from "../domain/voucher.model";

export const PRODUCT_CONFIG: Record<VoucherType, SectionConfig[]> = {
  [VoucherType.SALES_INVOICE]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', required: false, hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', required: false, hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'pendiente', options: [{ label: 'Pendiente', value: 'pendiente' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'FV - ',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', required: true, colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    }
  ],
  [VoucherType.PURCHASE_INVOICE]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'pendiente', options: [{ label: 'Pendiente', value: 'pendiente' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'FC - ',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', required: true, colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    }
  ],
  [VoucherType.PAYROLL]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', required: true, hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', required: true, hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'pendiente', options: [{ label: 'Pendiente', value: 'pendiente' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'NO - ',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', required: true, colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    }
  ],
  [VoucherType.CASH_RECEIPT]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', required: true, hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', required: true, hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'pendiente', options: [{ label: 'Pendiente', value: 'pendiente' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'RC - ',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', required: true, colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    } 
  ],
  [VoucherType.PAYMENT_VOUCHER]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', required: true, hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', required: true, hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'crear', options: [{ label: 'Crear', value: 'crear' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'CE - ',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', required: true, colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    }
  ],
  [VoucherType.BANK_DEPOSIT]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', required: true, hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', required: true, hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'pendiente', options: [{ label: 'Pendiente', value: 'pendiente' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'CB - ',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', required: true, colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    }
  ],
  [VoucherType.ACCOUNTING_NOTE]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', required: true, hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', required: true, hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'pendiente', options: [{ label: 'Pendiente', value: 'pendiente' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'NC - ',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', required: true, colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    }
  ],
  [VoucherType.VOUCHER]: [
    {
      section: 'header',
      fields: [
        { name: 'id_tipo', label: 'Tipo de Comprobante', type: 'select', hidden: true},
        { name: 'id_periodo', label: 'Periodo', type: 'select', hidden: true},
        { name: 'estado', label: 'Estado', type: 'select', required: true,defaultValue: 'crear', options: [{ label: 'Crear', value: 'crear' },{ label: 'Aprobado', value: 'aprobado' } ], colSpan: 1},
      ]
    },
    {
      section: 'detail',
      fields: [
        { name: 'fecha_contable', label: 'Fecha Emisión', type: 'date', required: true},
        { name: 'compania', label: 'Empresa', type: 'text', required: true, colSpan: 2 },
        { name: 'numeroExterno', label: 'Doc. Ext No.', type: 'text', defaultValue: 'FV-',required: true, colSpan: 1 },
        { name: 'tercero', label: 'Proveedor', type: 'select', colSpan: 1 },
        { name: 'direccion', label: 'Dirección', type: 'text', required: true, colSpan: 2 },
        { name: 'telefono', label: 'Teléfono', type: 'text', required: false, colSpan: 1 },
        { name: 'descripcion', label: 'Concepto', type: 'text', required: true, colSpan: 2 },
         { name: 'empleado', label: 'Compró', type: 'text', required: true, colSpan: 2 },
      ]
    }
  ]
};