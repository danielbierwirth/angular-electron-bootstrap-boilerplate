import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// The root dashboard component
@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onWelcomeToApp () {
    // Route to annotator section.
    this.router.navigate(['../settings']);
  }
}
