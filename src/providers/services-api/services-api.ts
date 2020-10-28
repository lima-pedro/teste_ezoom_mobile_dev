import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from '../../interfaces/cursos';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesApiProvider {

  baseUrl: string = "http://localhost/teste-ezoom/API/";
  cursos: any;

  constructor(public http: HttpClient) {}

  read (): Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.baseUrl);
  }

  readRow (id: number): Observable<Cursos>{
    return this.http.get<Cursos>(this.baseUrl + id);
  }
}
