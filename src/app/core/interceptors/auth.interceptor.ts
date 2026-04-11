import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const schema = 'Calicanto' //localStorage.getItem('schema');

  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token || ''}`,
      'x-schema': schema || ''
    }
  });

  return next(cloned);
};