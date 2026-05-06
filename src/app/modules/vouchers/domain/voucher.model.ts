export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'checkbox';
  required?: boolean;
  options?: { label: string; value: any }[];
  fullWidth?: boolean;
  hint?: string;
  defaultValue?: any;
  hidden?: boolean;
  colSpan?: number;
}

export interface SectionConfig {
  section: 'header' | 'detail' | 'footer';
  fields: FieldConfig[];
}