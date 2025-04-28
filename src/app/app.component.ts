import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReportsStore} from './apps/roleauth/core/state/reports.store';
import {UserService} from './apps/roleauth/core/services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  store = inject(ReportsStore);
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.login('admin@deepersignals.com', 'password').subscribe();
  }
}
