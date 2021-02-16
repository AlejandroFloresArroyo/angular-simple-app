import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { identity } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { element } from 'protractor';

export interface grupo {
  id: number;
  name: string;
  employees?: employee[];
}
export interface employee {
  id: number;
  group_id: number;
  name: string;
}

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  dataRetrieved: Set<grupo> = new Set();

  grupos: grupo[] = [];
  seleccionados: grupo[] = [];

  constructor(private readonly gruposService: GruposService) {}

  ngOnInit(): void {
    this.gruposService.getGrupos().subscribe((res: any) => {
      this.grupos = res.data.groups;
      this.getDatosEmpleados();
    });
  }

  getDatosEmpleados() {
    this.grupos.forEach(
      (element) => {
        this.gruposService.getEmpleados(element.id).subscribe((res: any) => {
          if (res.success) {
            element.employees = res.data.employees;
          }
        });
      },
      (err: any) => {
        console.warn('/////////', err.error);
      }
    );
    console.log('Grupos', this.grupos);
  }

  drop(event: CdkDragDrop<grupo[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.seleccionados);
  }
}
