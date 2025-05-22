import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class EntityFormComponent<T> {
  // Dados da entidade a ser editada ou criada
  @Input({ required: true }) entity!: T;

  // Campos obrigatórios (ex: ['name'])
  @Input() requiredFields: (keyof T)[] = [];

  // Emite quando o formulário é salvo
  @Output() save = new EventEmitter<Partial<T>>();

  // Usamos FormGroup<any> por ser genérico, mas pode ser estendido com interface específica
  form!: FormGroup;

  ngOnInit(): void {
    if (!this.entity) {
      throw new Error('Entity must be provided to the form.');
    }

    this.form = new FormGroup<Record<keyof T, FormControl<any>>>(
      Object.keys(this.entity).reduce((acc, key) => {
        const value = (this.entity as any)[key];
        const validators = this.requiredFields.includes(key as keyof T)
          ? [Validators.required]
          : [];
        acc[key as keyof T] = new FormControl(value, validators);
        return acc;
      }, {} as Record<keyof T, FormControl<any>>)
    );
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
