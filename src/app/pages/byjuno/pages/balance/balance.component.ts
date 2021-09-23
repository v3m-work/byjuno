import { Component, OnInit } from '@angular/core';
import { BalanceService } from "./balance.service";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance$: Observable<number> = this.balanceService.balance$;
  moneySumArray: number[] = [];

  constructor(
    private balanceService: BalanceService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.balance$ = this.balanceService.balance$;
    this.moneySumArray = this.balanceService.moneyArr;
  }

  addMoney(sum: number) {
    this.balanceService.addBalance(sum);
  }
}
