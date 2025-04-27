import { HttpInterceptorFn } from '@angular/common/http';

export const AddHeadersInterceptor: HttpInterceptorFn = (req, next) => {

  const userToken = localStorage.getItem('userToken');

  if(!userToken) return next(req);

  const newReq = req.clone({
    headers: req.headers.set('X-Token', userToken)
  })

  return next(req);

};
