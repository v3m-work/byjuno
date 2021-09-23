import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BalanceComponent } from './balance.component';
import { NavigationModule } from "../../../../shared/components/navigation/navigation.module";
import { ButtonModule } from "../../../../shared/components/ui/button/button.module";


@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ButtonModule
  ],
  exports: [BalanceComponent]
})
export class BalanceModule { }
