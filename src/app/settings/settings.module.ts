import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import root component for dashaboard module
import { SettingsComponent } from './settings.component';

// Import navigation component for dashaboard module
import { NavigationComponent } from './navigation/navigation.component';

// Component that contains input fields.
import { InputComponent } from './input/input.component';

// Component that contains readonly fields.
import { OutputComponent } from './output/output.component';

// Import settings routing module.
import { SettingsRoutingModule } from './settings-routing.module';

// Import translate module
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    TranslateModule
  ],
  declarations: [
    SettingsComponent,
    NavigationComponent,
    InputComponent,
    OutputComponent
  ],
  entryComponents: [SettingsComponent],
})
export class SettingsModule { }
