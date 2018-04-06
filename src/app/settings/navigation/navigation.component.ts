import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Import translate service
import { TranslateService } from '@ngx-translate/core';

// The navigation dashboard component
@Component({
 selector: 'app-settings-navigation',
 templateUrl: './navigation.component.html',
 styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  constructor(private router: Router,
  private translate: TranslateService) { }

  ngOnInit() {
  }

  // Handle input section request. set input component
  // as settings main component.
  onEnterDetailsSectionClicked () {
    this.router.navigate(['/app-settings-inputput']);
  }

  // Handle read section request. set 'read from store' component
  // as settings main component.
  onReadDetailsSectionClicked () {
    this.router.navigate(['/app-settings-output']);
  }
}
