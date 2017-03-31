import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  root = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.root}/users`);
  }
}
