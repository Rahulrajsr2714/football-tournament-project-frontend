import { AppSettings } from './../app.settings';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user = new BehaviorSubject<string>(null);

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  });

  login(username:string,password:string){
    return this.http.post<{token:string}>(AppSettings.API_ENDPOINT+'admin-login',{username:username,password:password})
    .pipe(
      (tap((event)=>{
        localStorage.setItem('token', JSON.stringify(event.token));
        this.user.next(event.token);
      })))
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('token');
  }

  autoLogin() {
    const token: string = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      this.user.next(null);
      return;
    } else {
      this.user.next(token);
      return true;
    }
  }
}
