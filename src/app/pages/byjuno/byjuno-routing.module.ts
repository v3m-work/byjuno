import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByjunoComponent } from "./byjuno.component";
import { TransactionsComponent } from "./pages/transactions/transactions.component";
import { BalanceComponent } from "./pages/balance/balance.component";
import { LanguageComponent } from "./pages/language/language.component";

const routes: Routes = [
  {
    path: '',
    component: ByjunoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'balance',
      },
      {
        path: 'balance',
        component: BalanceComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'language',
        component: LanguageComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByJunoRoutingModule { }
