import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// The navigation dashboard component
@Component({
 selector: 'app-settings-navigation',
 templateUrl: './navigation.component.html',
 styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
