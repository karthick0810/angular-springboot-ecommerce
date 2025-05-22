import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://afebb05d2998b4d81aa2bcbc9bfbcaaa-1914543764.us-west-1.elb.amazonaws.com:8080/api/v1/orders';

  constructor(private http: HttpClient) {}

  checkout(userId: string, access_token: string, paymentMethodId: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + access_token
    });

    return this.http.post(`${this.apiUrl}/${userId}/checkout`, { paymentMethodId }, { headers });
  }
}
