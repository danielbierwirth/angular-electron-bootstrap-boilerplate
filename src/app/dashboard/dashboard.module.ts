import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import root component for dashaboard node_modules
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DashboardComponent
  ],
  entryComponents: [DashboardComponent],
})
export class DashboardModule { }
