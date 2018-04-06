import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import root component for dashaboard node_modules
import { DashboardComponent } from './dashboard.component';

// Import translate module
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    DashboardComponent
  ],
  entryComponents: [DashboardComponent],
})
export class DashboardModule { }
