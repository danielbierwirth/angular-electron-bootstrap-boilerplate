import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import root component for dashaboard module
import { SettingsComponent } from './settings.component';

// Import navigation component for dashaboard module
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SettingsComponent,
    NavigationComponent
  ],
  entryComponents: [SettingsComponent],
})
export class SettingsModule { }
