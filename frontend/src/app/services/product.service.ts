import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://afebb05d2998b4d81aa2bcbc9bfbcaaa-1914543764.us-west-1.elb.amazonaws.com:8080/api/v1/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }

  addToCart(productId: number, quantity: number): Observable<any> {
    const userId = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.post<number>(`http://afebb05d2998b4d81aa2bcbc9bfbcaaa-1914543764.us-west-1.elb.amazonaws.com:8080/api/v1/cart/${userId}/${productId}/${quantity}`, {}, { headers });
  }
}
