import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserDto {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://afebb05d2998b4d81aa2bcbc9bfbcaaa-1914543764.us-west-1.elb.amazonaws.com:8080/api/v1/user';

  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<User> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    const options = { headers };
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<User>(url, options);
  }

  updateUser(userId: string, userDto: UserDto): Observable<User> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    const options = { headers };
    const url = `${this.baseUrl}/update/${userId}`;
    return this.http.put<User>(url, userDto, options);
  }
}