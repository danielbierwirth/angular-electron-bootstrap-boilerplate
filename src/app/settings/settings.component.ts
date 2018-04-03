import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// The root dashboard component
@Component({
 selector: 'app-settings',
 templateUrl: './settings.component.html',
 styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    // Load inputcomponent by default.
    this.router.navigate(['/app-settings-inputput']);
  }
}
