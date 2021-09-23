import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "../../shared/components/ui/button/button.module";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    TranslateModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
