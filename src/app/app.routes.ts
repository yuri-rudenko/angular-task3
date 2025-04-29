import { Routes } from '@angular/router';
import {LandingComponent} from './apps/roleauth/features/landing/view/pages/landing/landing.component';
import {LoginComponent} from './apps/roleauth/features/login/view/pages/login/login.component';
import {ApanelComponent} from './apps/roleauth/features/apanel/view/pages/apanel/apanel.component';
import {AuthGuard} from './apps/roleauth/core/guards/auth.guard';
import {RoleGuard} from './apps/roleauth/core/guards/role.guard';
import {
  NotAuthorizedComponent
} from './apps/roleauth/features/not-authorised/view/pages/not-authorised/not-authorized.component';
import {LayoutComponent} from './apps/roleauth/features/layout/layout.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', component: LandingComponent, canActivate: [AuthGuard]
      },
      {
        path: 'apanel', component: ApanelComponent, canActivate: [RoleGuard], data: { expectedRole: 'Admin' }
      },
      {
        path: "not-authorized", component: NotAuthorizedComponent, canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
];
