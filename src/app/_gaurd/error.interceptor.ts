import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

// this function will be used to handle the http error
export class errorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                alert(error.error.message)
                return throwError(error);
            })
        )
    }


}
 // This function will be used to add the header on request
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken= sessionStorage.getItem('token');
        req = req.clone({
        setHeaders: {
          'X-access-token': `${accessToken}`,
        },
      });
  
      return next.handle(req);
    }
  }
