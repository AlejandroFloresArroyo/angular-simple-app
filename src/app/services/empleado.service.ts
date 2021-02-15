import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpleadoModel } from '../models/empleado.model';

const base_url =
  'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/alejandro';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get(base_url);
  }

  save(empleado: EmpleadoModel) {
    return this.http.post(base_url, empleado);
  }
}
