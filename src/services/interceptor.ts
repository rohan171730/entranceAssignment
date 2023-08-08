import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('enter');

    req = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', '*'),
    });
    req = req.clone({
      headers: req.headers.set('Access-Control-Allow-Methods', 'GET'),
    });

    return next.handle(req);
  }
}
