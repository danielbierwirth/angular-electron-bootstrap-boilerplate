import { Component, OnInit } from '@angular/core';

// Import storage service
import {StorageService} from '../../services/storage.service';

// The navigation dashboard component
@Component({
 selector: 'app-settings-output',
 templateUrl: './output.component.html',
 styleUrls: ['./output.component.scss']
})

export class OutputComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    if (this.isElectron()) {
      const settingsStore  = new StorageService('electron-boilerplate-settings');

      // Check for summary in store.
      if (settingsStore.has('summary')) {
        let summary = settingsStore.get('summary');
        (<HTMLInputElement>document.getElementById('summaryFormControlTextarea')).value = summary;
      }
      // Check for details in store.
      if (settingsStore.has('detail')) {
        let details = settingsStore.get('detail');
        (<HTMLInputElement>document.getElementById('detailsFormControlTextarea')).value = details;
      }
      // Check for rating in store.
      if (settingsStore.has('rating')) {
        let rating = settingsStore.get('rating');
        (<HTMLInputElement>document.getElementById('ratingFormControlSelect')).value = rating;
      }
    }
  }

  // Check if app is run as electron app
  isElectron = () => {
    return window && window.process && window.process.type;
  }
}
