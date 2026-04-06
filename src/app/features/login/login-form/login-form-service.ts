import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  private readonly http = inject(HttpClient);
  logUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<User> {
    return this.http
      .get<User>(
        `http://localhost:3000/users?email:eq=${email}&password:eq=${password}`,
      )
      .pipe(delay(2000));
  }
}
