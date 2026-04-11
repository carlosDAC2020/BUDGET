export function formatDate(date: string): string {
  return date ? date.split('T')[0] : '';
}

