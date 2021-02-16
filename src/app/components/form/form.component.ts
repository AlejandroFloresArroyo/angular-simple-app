import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  @Output() update: EventEmitter<any>;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private fb: FormBuilder,
    private readonly empleadoService: EmpleadoService
  ) {
    this.crearFormulario();
    this.update = new EventEmitter();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      fecha: ['', Validators.required],
    });
  }

  guardar() {
    if (this.form.valid) {
      const empleado: EmpleadoModel = new EmpleadoModel();
      empleado.name = this.form.value.nombre;
      empleado.last_name = this.form.value.apellido;
      empleado.birthday = this.form.value.fecha;
      this.empleadoService.save(empleado).subscribe((res: any) => {
        if (res.success) {
          alert('Empleado guardado');
          this.form.reset();
          this.update.emit();
        }
      });
    }
  }
}
