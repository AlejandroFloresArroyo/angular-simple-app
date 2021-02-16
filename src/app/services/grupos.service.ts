import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base_url =
  'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  constructor(private http: HttpClient) {}

  getGrupos() {
    console.log('GetGrupos', `${base_url}/groups/alejandro`);
    return this.http.get(`${base_url}/groups/alejandro`);
  }

  getEmpleados(id: number) {
    console.log(
      'GetEmpleados',
      `${base_url}/employees/alejandro/getByGroup?id=${id}`
    );

    return this.http.get(`${base_url}/employees/alejandro/getByGroup?id=${id}`);
  }
}
