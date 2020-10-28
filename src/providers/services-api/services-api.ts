import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from '../../interfaces/cursos';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesApiProvider {

  baseUrl: string = "http://teste-ezoom-com.umbler.net/API/";
  cursos: any;

  httpOptions = {
    headers: new HttpHeaders({
      ['Content-Type']: 'application/json',
      ['Authorization']:'Basic dW1ibGVyOnRlc3RlaG9zcGVkYWdlbQ=='
    })
  }

  constructor(public http: HttpClient) {}

  read (): Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.baseUrl, this.httpOptions);
  }

  readRow (id: number): Observable<Cursos>{
    return this.http.get<Cursos>(this.baseUrl + id, this.httpOptions);
  }
}
