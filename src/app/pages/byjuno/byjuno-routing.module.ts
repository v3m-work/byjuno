import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByjunoComponent } from "./byjuno.component";
import { TransactionsComponent } from "./pages/transactions/transactions.component";
import { BalanceComponent } from "./pages/balance/balance.component";

const routes: Routes = [
  {
    path: '',
    component: ByjunoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'transactions',
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'balance',
        component: BalanceComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByJunoRoutingModule { }
