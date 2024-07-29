import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from './token.service';
import { inject } from '@angular/core';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const cloneReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
  return next(req);
};
