import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { StorageService } from "../../shared/services/storage.service";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('codeField', {static: false})
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  busy = false;
  authError = false;

  loginForm = this.formBuilder.group({
    card: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4)
    ]],
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private storage: StorageService,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  logIn() {
    this.busy = true;
    this.authError = false;
    if (this.loginForm.invalid) {
      this.authError = true;
      this.busy = false;
      return;
    }

    const cardValue = this.loginForm.get('card')?.value;
    this.auth.checkCardNumber(cardValue)
      .pipe(
        finalize(() => this.busy = false)
      )
      .subscribe(
        (success) => this.auth.logIn(),
        (err) => {
          this.authError = true
        }
      );
  }

  get form() {
    return this.loginForm.controls;
  }

  resetAuthError() {
    this.authError = false;
  }
}
