import { Component, OnInit } from '@angular/core';

// Import storage service
import {StorageService} from '../../services/storage.service';

// Import translate service
import { TranslateService } from '@ngx-translate/core';

// The navigation dashboard component
@Component({
 selector: 'app-settings-inputput',
 templateUrl: './input.component.html',
 styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  // Handle save to local store request.
  onSaveToStoreClicked() {
    // Get summary, details, rating input value
    const summaryValue = (<HTMLInputElement>document.getElementById('summaryFormControlTextarea')).value;
    const detailValue = (<HTMLInputElement>document.getElementById('detailsFormControlTextarea')).value;
    const ratingValue = (<HTMLInputElement>document.getElementById('ratingFormControlSelect')).value;

    // Note: Skipping value checks for simplicity

    // Running as electron app - use local JSON storage
    if (this.isElectron()) {
      // Get handle of custom 'electron-boilerplate-settings.json' JSON
      // store from local app data folder. New JSON store will be created
      // if noting can be found in local app data folder
      const settingsStore  = new StorageService('electron-boilerplate-settings');

      // Update summary in store.
      settingsStore.set('summary', summaryValue);

      // Update details in store.
      settingsStore.set('detail', detailValue);

      // Update rating in store.
      settingsStore.set('rating', ratingValue);
    }
  }

  // Check if app is run as electron app
  isElectron = () => {
    return window && window.process && window.process.type;
  }
}
