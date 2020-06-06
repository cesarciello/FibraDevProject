import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CNPJPipe } from './CNPJPipe/cnpjpipe.pipe';
import { ModalCreateClientComponent } from './modal-create-client/modal-create-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsModule } from 'src/app/shared/components/fields/fields.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  exports: [
    CNPJPipe,
    ModalCreateClientComponent
  ],
  declarations: [
    CNPJPipe,
    ModalCreateClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ClientsComponentsModule { }
