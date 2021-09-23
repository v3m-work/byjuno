import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByjunoComponent } from './byjuno.component';
import { NavigationModule } from "../../shared/components/navigation/navigation.module";
import { RouterModule } from "@angular/router";
import { ByJunoRoutingModule } from "./byjuno-routing.module";
import { ButtonModule } from "../../shared/components/ui/button/button.module";
import { TransactionsModule } from "./pages/transactions/transactions.module";
import { BalanceModule } from "./pages/balance/balance.module";
import { LanguageModule } from "./pages/language/language.module";

@NgModule({
  declarations: [
    ByjunoComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule,
    ByJunoRoutingModule,
    ButtonModule,
    TransactionsModule,
    BalanceModule,
    LanguageModule,
  ],
  exports: [ByjunoComponent]
})
export class ByjunoModule { }
