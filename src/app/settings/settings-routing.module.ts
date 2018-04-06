import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
     children: [
       { path: 'app-settings-inputput', component: InputComponent},
       { path: 'app-settings-output', component: OutputComponent},
       { path: '', component: InputComponent}
     ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule {}
