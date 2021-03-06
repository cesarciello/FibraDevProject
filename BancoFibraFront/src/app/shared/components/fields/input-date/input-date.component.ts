import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent {

  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validacao: ValidarCamposService) {}

  get formControl(): AbstractControl {
      return this.formGroup.controls[this.controlName];
  }

}
