export const environment = {
  production: false,
  // Configuracion local, apuntando temporalmente a puertos de host comunes o los AWS como proxy.
  apiUrls: {
    tenants: 'http://localhost:3000/tenants',
    contabilidad: 'http://localhost:3001/contable',
    seguridad: 'http://localhost:3002/security'
  }
};
