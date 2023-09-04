import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Person } from './person';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.url}/people`)
      .pipe(
        tap(p=>console.log(p)),
        catchError((e) => {
          console.log(e);
          return throwError(e);
        })
      )
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/product`)
    .pipe(
      catchError((e) => {
        tap(p=>console.log(p)),
        console.log(e);
        return throwError(e);
      })
    )
  }
}
