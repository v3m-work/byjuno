import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "../ui/button/button.module";



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
