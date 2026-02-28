import {
  bootstrapApplication,
  platformBrowser,
} from '@angular/platform-browser';

import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
