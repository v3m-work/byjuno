import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "../ui/button/button.module";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TranslateModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
