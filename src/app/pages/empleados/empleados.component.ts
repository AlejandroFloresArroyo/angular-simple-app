import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EmpleadoModel } from '../../models/empleado.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'cumpleaños'];
  empleados: EmpleadoModel[] = [];
  dataSource = new MatTableDataSource<EmpleadoModel>(this.empleados);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private readonly empleadoService: EmpleadoService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData() {
    this.empleadoService.getUsuarios().subscribe((res: any) => {
      this.empleados = res.data.employees;
      this.dataSource.data = this.empleados;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
