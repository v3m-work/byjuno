import { Injectable } from '@angular/core';
import { ApiService } from "../../../../shared/services/api.service";
import { Observable } from "rxjs";

export interface Transaction {
  completed: boolean
  id: number
  title: string
  userId: number
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private api: ApiService) { }

  getTransactions(): Observable<Transaction[]> {
    return this.api.get('todos');
  }
}
