import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import Report from '../models/report';
import {inject} from '@angular/core';
import {UserService} from '../services/user.service';
import {firstValueFrom} from 'rxjs';

const initialState = {
  reports: [] as Report[],
  loading: false,
};

export const ReportsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const userService = inject(UserService);

    return {
      async loadAll() {
        patchState(store, { loading: true });

        const data = await firstValueFrom(userService.getReports());
        if (data) {
          patchState(store, { reports: data, loading: false });
        } else {
          patchState(store, { loading: false });
        }
      }
    };
  })
);
