import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponentsModule } from './components/clients-components.module';
import { ClientComponent } from './client.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  exports: [
    ClientComponent,
    ClientsComponentsModule
  ],
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientsComponentsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class ClientModule { }
