import { Component } from '@angular/core';

// Import services
import { ElectronService } from './services/electron.service';
import { TranslateService } from '@ngx-translate/core';

// Import config
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public electronService: ElectronService,
    private translate: TranslateService) {

    // Set default language as fallback when a translation is'n availabe
    translate.setDefaultLang('en');

    // Set active language.
    translate.use('en');

    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
