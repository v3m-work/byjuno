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
  limitItems: number[] = [];
  listLimit = 40;

  constructor(private taService: TransactionsService) {
  }

  ngOnInit(): void {
    this.limitItems = this.taService.limitButtons;
    this.getTransactions();
  }

  private getTransactions() {
    this.$transactions = this.taService.getTransactions();
  }

  setLimit(qty: number) {
    this.listLimit = qty;
  }

}
