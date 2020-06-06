import { Injectable } from '@angular/core';

import { Client } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ValidationClientService {
  constructor() {}

  public validateToUpdate(client: Client) {
    if (!client.id) {
      return {
        status: false,
        error: 'Id nessesário para atualização',
      };
    }
    if (!this.validateCNPJ(client.cnpj)) {
      return {
        status: false,
        error: 'CNPJ Inválido',
      };
    }

    return {
      status: true,
      error: null,
    };
  }

  public validateToCreate(client: Client) {
    if (!client.name) {
      return {
        status: false,
        error: 'Nome é obrigatório para o cadastro.',
      };
    } else if (!client.date) {
      return {
        status: false,
        error: 'Data é obrigatória para o cadastro.',
      };
    } else if (!client.cnpj) {
      return {
        status: false,
        error: 'CNPJ é obrigatório para o cadastro.',
      };
    }
    if (!this.validateCNPJ(client.cnpj)) {
      return {
        status: false,
        error: 'CNPJ Inválido',
      };
    }

    return {
      status: true,
      error: null,
    };
  }

  public validateCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14) return false;

    if (
      cnpj == '00000000000000' ||
      cnpj == '11111111111111' ||
      cnpj == '22222222222222' ||
      cnpj == '33333333333333' ||
      cnpj == '44444444444444' ||
      cnpj == '55555555555555' ||
      cnpj == '66666666666666' ||
      cnpj == '77777777777777' ||
      cnpj == '88888888888888' ||
      cnpj == '99999999999999'
    )
      return false;

    let len = cnpj.length - 2;
    let numbers = cnpj.substring(0, len);
    let digits = cnpj.substring(len);
    let sum = 0;
    let pos = len - 7;
    for (let i = len; i >= 1; i--) {
      sum += numbers.charAt(len - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(0)) return false;

    len = len + 1;
    numbers = cnpj.substring(0, len);
    sum = 0;
    pos = len - 7;
    for (let i = len; i >= 1; i--) {
      sum += numbers.charAt(len - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(1)) return false;

    return true;
  }
}
