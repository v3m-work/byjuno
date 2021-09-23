import { Component, Input, OnInit } from '@angular/core';

export interface NavItem {
  name: string;
  router: string;
}


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() navItems: NavItem[] = [];
}
