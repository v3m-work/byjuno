import { Component, OnInit } from '@angular/core';
import { BalanceService } from "./balance.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance$: Observable<number> = this.balanceService.balance$;
  moneySumArray: number[] = [];

  constructor(private balanceService: BalanceService) {
  }

  ngOnInit(): void {
    this.balance$ = this.balanceService.balance$;
    this.moneySumArray = this.balanceService.moneyArr;
  }

  addMoney(sum: number) {
    this.balanceService.addBalance(sum);
  }
}
