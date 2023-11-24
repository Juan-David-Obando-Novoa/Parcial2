import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.development';
import { Observable } from 'rxjs';
import { Curso } from './Curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private apiUrl = environment.baseUrl;


  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  ngOnInit() {
    this.getCursos()
  }

}
