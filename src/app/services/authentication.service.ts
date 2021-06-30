import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { User } from '/models';
import { User } from '..//models/user';
import {environment} from "../../environments/environment";
// https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#login-component-ts

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject?: BehaviorSubject<User|null>;
  public currentUser: Observable<User|null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User|null>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User|null {
    return this.currentUserSubject ? this.currentUserSubject.value : null;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.config.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (this.currentUserSubject) {
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    if (this.currentUserSubject) {
      this.currentUserSubject.next(null);
    }
  }
}
