import { Component, OnInit } from '@angular/core';

// Import storage service
import {StorageService} from '../../services/storage.service';

// The navigation dashboard component
@Component({
 selector: 'app-settings-inputput',
 templateUrl: './input.component.html',
 styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Handle save to local store request.
  onSaveToStoreClicked() {
    // Get summary input value
    let summaryValue = (<HTMLInputElement>document.getElementById('summaryFormControlTextarea')).value;
    let detailValue = (<HTMLInputElement>document.getElementById('detailsFormControlTextarea')).value;
    let ratingValue = (<HTMLInputElement>document.getElementById('ratingFormControlSelect')).value;

    // Running as electron app - use local JSON storage
    if (this.isElectron()) {
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
