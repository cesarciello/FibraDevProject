import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from './http/http.service';
import { ApiResponse, Client, FilterNameCnpj } from '../../../app/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:5001/'

  constructor(private httpService: HttpService) { }

  getClients() {
    return this.httpService.get(this.baseUrl, 'api/client') as Observable<ApiResponse<Client[]>>
  }

  createClient(client: Client) {
    return this.httpService.post(this.baseUrl, 'api/client', client) as Observable<ApiResponse<Client>>
  }

  updateClient(clientToUpdate: Client) {
    return this.httpService.put(this.baseUrl, 'api/client', clientToUpdate) as Observable<ApiResponse<Client>>
  }

  public getByNameCnpj(filter: FilterNameCnpj) {
    return this.httpService.post(this.baseUrl, 'api/client/filter', filter) as Observable<ApiResponse<Client[]>>
  }

  deleteClient(clientId: number) {
    return this.httpService.delete(this.baseUrl, `api/client/${clientId}`) as Observable<ApiResponse<string>>
  }
}
