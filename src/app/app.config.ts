import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {AddHeadersInterceptor} from './apps/roleauth/core/interceptors/add-headers.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideEffects(), provideHttpClient(withInterceptors([AddHeadersInterceptor]))]
};
