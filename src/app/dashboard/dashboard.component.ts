import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Import translate service
import { TranslateService } from '@ngx-translate/core';

// The root dashboard component
@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  constructor(private router: Router,
    private translate: TranslateService) { }

  ngOnInit() {
  }

  // Handle welcome button press event and
  // navigate to settings section.
  onWelcomeToApp () {
    // Route to annotator section.
    this.router.navigate(['../settings']);
  }
}
