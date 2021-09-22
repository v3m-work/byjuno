import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { ButtonModule } from "../../../../shared/components/ui/button/button.module";



@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports:[TransactionsComponent]
})
export class TransactionsModule { }
