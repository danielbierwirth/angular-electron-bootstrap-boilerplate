import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import translation packgages
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Main app routing and component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import dashboard module
import { DashboardModule } from './dashboard/dashboard.module';

// Import settings module
import { SettingsModule } from './settings/settings.module';

// Import services
import { ElectronService } from './services/electron.service';
import { WebviewDirective } from './directives/webview.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    SettingsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
