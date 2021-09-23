import { Component, OnInit } from '@angular/core';
import { NavItem } from "../../shared/components/navigation/navigation.component";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-byjuno',
  templateUrl: './byjuno.component.html',
  styleUrls: ['./byjuno.component.scss']
})
export class ByjunoComponent implements OnInit {

  navItems: NavItem[] = [
    {name: 'balance', router: 'balance'},
    {name: 'transactions', router: 'transactions'},
    {name: 'language', router: 'language'},
  ]

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.auth.logOut();
  }

}
