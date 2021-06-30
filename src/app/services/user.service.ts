import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.config.apiUrl}/users`);
  }

  register(user: User) {
    return this.http.post(`${environment.config.apiUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.config.apiUrl}/users/${id}`);
  }
}
