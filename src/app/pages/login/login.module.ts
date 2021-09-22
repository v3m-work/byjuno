import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "../../shared/components/ui/button/button.module";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
