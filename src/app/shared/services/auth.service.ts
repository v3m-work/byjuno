import { Injectable } from '@angular/core';
import { StorageService } from "./storage.service";
import { Observable, of, throwError } from "rxjs";
import { Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";

enum Card {
  CODE = '7777'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private storage: StorageService
  ) {
  }

  checkCardNumber(cardNumber: string): Observable<string> {
    return of(cardNumber === Card.CODE)
      .pipe(
        switchMap((res) => res ? of('success') : throwError('error'))
      );
  }

  isAuth(): Observable<boolean> {
    const code = this.storage.getLocal('card') !== 'error';
    return of(code);
  }

  logIn() {
    this.storage.setLocal('card', 'success');
    this.router.navigate(['/transactions']);
  }

  logOut() {
    this.storage.removeLocal('card');
    this.router.navigate(['/login']);
  }
}
