import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { customInterceptor } from './custom.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withInMemoryScrolling({anchorScrolling:'enabled',scrollPositionRestoration:'enabled'})),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([customInterceptor])),
    provideAnimations(), // required animations providers
    provideToastr( {timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), provideAnimationsAsync(),
  ]
};
