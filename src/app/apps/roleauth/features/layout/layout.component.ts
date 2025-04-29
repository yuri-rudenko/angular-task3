import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ReportsStore} from '../../core/state/reports.store';
import {UserService} from '../../core/services/user.service';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    MatButton,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  store = inject(ReportsStore);
  userService = inject(UserService);
  isAdmin: boolean = localStorage.getItem("role") === 'Admin';

  onExit() {
    this.store.reset();
    this.userService.exit();
  }

}
