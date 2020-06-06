import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FieldsModule } from './fields/fields.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  exports: [
    HeaderComponent,
    SnackbarComponent,
    FieldsModule
  ],
  declarations: [
    HeaderComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    FieldsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class SharedComponentsModule { }
