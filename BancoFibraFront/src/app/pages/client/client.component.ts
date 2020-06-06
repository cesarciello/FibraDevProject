import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Client, ApiResponse, FilterNameCnpj } from '../../models';
import { ClientService } from '../../services/client/client.service';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { ModalCreateClientComponent } from './components/modal-create-client/modal-create-client.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  public filterPage: FilterNameCnpj = {
    name: null,
    cnpj: null
  };
  public isCanViewTable = 'load';
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = [
    'name',
    'cnpj',
    'date',
    'edit',
    'delete',
    'include',
  ];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private clientService: ClientService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.setDataSource();
    this.dataSource.paginator = this.paginator;
  }

  public deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(response => {
      this.openSnackBar('Registro deletado efetuado com sucesso', 'check');
      this.setDataSource();
    }, error => {
      console.error(error)
      this.openSnackBar('Não foi possivel deletar o registro, tente novamente!', 'close');
    });
  }

  public openModalCreateClient(type: string, client?: Client): void {
    this.matDialog
      .open(ModalCreateClientComponent, {
        data: {
          type,
          client,
        },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.setDataSource();
        }
      });
  }

  public filterByNameCnpj(){
    this.isCanViewTable = 'load';
    let filter = this.filterPage;
    filter.name = filter.name ? filter.name.trim() : '';
    filter.cnpj = filter.cnpj ? filter.cnpj.trim() : '';
    this.clientService.getByNameCnpj(this.filterPage).subscribe(
      (response) => {
        this.dataSource.data = response.data;
        this.isCanViewTable = 'succ';
      },
      (error) => {
        this.isCanViewTable = 'error';
      }
    );
  }

  public cleanFilters() {
    this.filterPage.cnpj= '';
    this.filterPage.name= '';
    this.setDataSource();
  }

  private setDataSource(): void {
    this.isCanViewTable = 'load';
    this.clientService.getClients().subscribe(
      (response) => {
        this.dataSource.data = response.data;
        this.isCanViewTable = 'succ';
      },
      (error) => {
        this.isCanViewTable = 'error';
      }
    );
  }

  private openSnackBar(text: string, icon: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      data: {
        text,
        icon,
      },
    });
  }
}
