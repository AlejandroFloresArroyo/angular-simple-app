import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { element } from 'protractor';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ElementRef } from '@angular/core';

export interface grupo {
  id: number;
  name: string;
  employees?: employee[];
}
export interface employee {
  id: number;
  group_id: number;
  name: string;
  isChecked?: boolean;
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

  constructor(
    private readonly gruposService: GruposService,
    private elem: ElementRef
  ) {}

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
        console.warn('---->', err.error);
      }
    );
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

  checkValue(id: any) {
    console.log(id);
  }

  printAll() {
    let elements = this.elem.nativeElement.querySelectorAll('.employee-cb');
    elements.forEach((el: any) => {
      if (el.checked) {
        this.seleccionados.forEach((gr) => {
          console.log(gr.employees?.find((empl) => empl.id == el.id));
        });
      }
    });
  }
}
