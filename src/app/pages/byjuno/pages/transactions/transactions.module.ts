import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { ButtonModule } from "../../../../shared/components/ui/button/button.module";
import { NavigationModule } from "../../../../shared/components/navigation/navigation.module";



@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    NavigationModule,
  ],
  exports:[TransactionsComponent]
})
export class TransactionsModule { }
