import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { ButtonModule } from "../../../../shared/components/ui/button/button.module";



@NgModule({
  declarations: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [LanguageComponent]
})
export class LanguageModule { }
