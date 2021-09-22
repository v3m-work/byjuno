import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionsService } from "./transactions.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  $transactions: Observable<Transaction[]> = new Observable<Transaction[]>();

  constructor(private taService: TransactionsService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions() {
    this.$transactions = this.taService.getTransactions();
  }

}
