import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { TransactionsComponent } from "./pages/byjuno/pages/transactions/transactions.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/byjuno/byjuno.module').then(m => m.ByjunoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: TransactionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
