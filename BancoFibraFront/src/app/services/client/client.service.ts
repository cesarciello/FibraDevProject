import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { ApiResponse, Client, FilterNameCnpj } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private apiService: ApiService,
    
    ) { }

  public getClients() {
    try {
      return this.apiService.getClients() as Observable<ApiResponse<Client[]>>
    } catch (error) {
      throw error;
    }
  }

  public createClient(client: Client) {
    try {
      return this.apiService.createClient(client) as Observable<ApiResponse<Client>>
    } catch(error) {
      throw error;
    }
  }

  public updateClient(clientToUpdate: Client) {
    try {
      return this.apiService.updateClient(clientToUpdate) as Observable<ApiResponse<Client>>
    } catch (error) {
      throw error;
    }
  }

  public deleteClient(clientID: number) {
    try {
      return this.apiService.deleteClient(clientID) as Observable<ApiResponse<string>>
    } catch (error) {
      throw error;
    }
  }

  public getByNameCnpj(filter: FilterNameCnpj) {
    try {
      return this.apiService.getByNameCnpj(filter) as Observable<ApiResponse<Client[]>>
    } catch (error) {
      throw error;
    }
  }
}
