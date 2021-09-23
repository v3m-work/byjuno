import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { ButtonModule } from "../../../../shared/components/ui/button/button.module";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule
  ],
  exports: [LanguageComponent]
})
export class LanguageModule { }
