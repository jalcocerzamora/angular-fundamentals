import { enableProdMode, TRANSLATIONS } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// content of your translation file
const translations = '....';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
