import { Component } from '@angular/core';
import { DEBUG_INFO_ENABLED, VERSION, API_URL } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-webpack-docker-nginx';
  DEBUG_INFO_ENABLED: Boolean;
  VERSION: String;
  API_URL: String;

  constructor() {
    this.DEBUG_INFO_ENABLED = DEBUG_INFO_ENABLED as Boolean;
    this.VERSION = VERSION as String;
    this.API_URL = API_URL as String;
  }
}
