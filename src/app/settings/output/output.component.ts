import { Component, OnInit } from '@angular/core';

// Import storage service
import {StorageService} from '../../services/storage.service';

// Import translate service
import { TranslateService } from '@ngx-translate/core';

// The navigation dashboard component
@Component({
 selector: 'app-settings-output',
 templateUrl: './output.component.html',
 styleUrls: ['./output.component.scss']
})

export class OutputComponent implements OnInit {
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    if (this.isElectron()) {
      // Get handle of custom 'electron-boilerplate-settings.json' JSON
      // store from local app data folder.
      const settingsStore  = new StorageService('electron-boilerplate-settings');

      // Check for summary in store.
      if (settingsStore.has('summary')) {
        (<HTMLInputElement>document.getElementById('summaryFormControlTextarea')).value = settingsStore.get('summary');
      }
      // Check for details in store.
      if (settingsStore.has('detail')) {
        (<HTMLInputElement>document.getElementById('detailsFormControlTextarea')).value = settingsStore.get('detail');
      }
      // Check for rating in store.
      if (settingsStore.has('rating')) {
        (<HTMLInputElement>document.getElementById('ratingFormControlSelect')).value = settingsStore.get('rating');
      }
    }
  }

  // Check if app is run as electron app
  isElectron = () => {
    return window && window.process && window.process.type;
  }
}
