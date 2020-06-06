import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DataModalClient, Client } from '../../../../models';
import { ClientService } from '../../../../services/client/client.service';
import { SnackbarComponent } from '../../../../shared/components/snackbar/snackbar.component';
import { ValidationClientService } from 'src/app/services/validation-client/validation-client.service';

@Component({
  selector: 'app-modal-create-client',
  templateUrl: './modal-create-client.component.html',
  styleUrls: ['./modal-create-client.component.scss'],
})
export class ModalCreateClientComponent implements OnInit {
  client: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: DataModalClient,
    private validationClientService: ValidationClientService,
    public dialogRef: MatDialogRef<ModalCreateClientComponent>
  ) {
    const { client, type } = data;
    this.constructFormGroup();
    if (type === 'edit') {
      this.pushDataOnForm(client);
    }
  }

  ngOnInit(): void {}

  private constructFormGroup() {
    this.client = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      cnpj: ['', [Validators.required]],
      date: ['', Validators.required],
    });
  }

  private pushDataOnForm(client: Client) {
    const { name, cnpj, date } = client;
    this.client.setValue({ name, cnpj, date });
  }

  public saveClient() {
    const client = this.client.value;
    if (this.data.type === 'create') {
      this.createClient(client);
    } else {
      client['id'] = this.data.client.id;
      this.editClient(client);
    }
  }

  private createClient(client: Client) {
    const validation = this.validationClientService.validateToCreate(client);
    if(!validation.status) {
      this.openSnackBar(validation.error, 'close');
      return;
    }
    this.clientService.createClient(client).subscribe(
      (response) => {
        this.openSnackBar('Cadastro efetuado com sucesso', 'check');
        this.dialogRef.close(true);
      },
      (error) => {
        console.error(error);
        this.openSnackBar('Não foi possivel efetuar o cadastro, tente novamente!', 'close');
      }
    );
  }

  private editClient(client: Client) {
    const validation = this.validationClientService.validateToUpdate(client);
    if(!validation.status) {
      this.openSnackBar(validation.error, 'close');
      return;
    }
    this.clientService.updateClient(client).subscribe((response) => {
      this.openSnackBar('Alteração efetuada com sucesso', 'check');
      this.dialogRef.close(true);
    },
    (error) => {
      console.log(error);
      this.openSnackBar('Não foi possivel efetuar a alteração, tente novamente!', 'close');
    });
  }

  private openSnackBar(text: string, icon: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      data: {
        text,
        icon,
      },
    });
  }
}
