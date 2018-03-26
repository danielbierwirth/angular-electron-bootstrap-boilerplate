import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import dashboard component
import { DashboardComponent } from './dashboard/dashboard.component';

// Import settings component
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    // By default, route to dadshboard component
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
