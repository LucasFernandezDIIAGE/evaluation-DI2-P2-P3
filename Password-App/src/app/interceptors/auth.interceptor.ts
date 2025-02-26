import { HttpInterceptorFn, HttpHandler } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = '2BE5A87E663CE9148523EC7B5239F!';
  console.log('Ajout de l\'API Key:', apiKey);
  const clonedRequest = req.clone({
    setHeaders: { 'ApiKey': apiKey }
  });

  console.log(clonedRequest)

  return next(clonedRequest);
};

