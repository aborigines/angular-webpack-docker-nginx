import { Component, OnInit } from '@angular/core';
import { DEBUG_INFO_ENABLED, VERSION } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-webpack-docker-nginx';
  DEBUG_INFO_ENABLED: Boolean;
  VERSION: String;

  ngOnInit(): void {
    this.DEBUG_INFO_ENABLED = DEBUG_INFO_ENABLED;
    this.VERSION = VERSION;
  }
}
