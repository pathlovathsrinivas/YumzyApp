import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { apiUrls } from '../_shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(public http: HttpClient) { }


  login(body: any): Observable<any> {
    return this.http.post(`${environment.url}/${apiUrls.loginApi}`, body, { observe: 'response' })
      .pipe(map(data => data));
  }


  getOrderDetails(orderId: any): Observable<any> {
    return this.http.get(`${environment.url}/${apiUrls.orderDetails}?orderId=${orderId}`)
      .pipe(map(data => data));
  }
}
