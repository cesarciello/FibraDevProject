import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { MaterialModule } from '../../uteis/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
      InputTextComponent,
      InputDateComponent
    ],
  exports: [
      InputTextComponent,
      InputDateComponent
    ],
  imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule
    ],
})
export class FieldsModule {}
