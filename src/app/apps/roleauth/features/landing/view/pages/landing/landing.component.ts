import {Component, inject, OnInit} from '@angular/core';
import {ReportsStore} from '../../../../../core/state/reports.store';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  store = inject(ReportsStore)

  ngOnInit() {
    this.store.loadAll();
  }
}
