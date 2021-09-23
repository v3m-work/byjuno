import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balanceSubject$ = new BehaviorSubject<number>(0);
  readonly balance$: Observable<number> = this.balanceSubject$.asObservable();

  moneyArr: number[] = [5, 10, 20, 50, 100, 200, 500, 1000];

  constructor() {
  }

  addBalance(sum: number) {
    const existingValue = this.balanceSubject$.getValue();
    this.balanceSubject$.next(existingValue + sum);
  }
}
