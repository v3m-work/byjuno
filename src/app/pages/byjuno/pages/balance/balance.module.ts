import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance.component';



@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BalanceComponent]
})
export class BalanceModule { }
