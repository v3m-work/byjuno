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

  limitButtons: number[] = [5, 10, 40, 100]

  constructor(private api: ApiService) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.api.get('todos');
  }
}
