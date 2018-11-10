import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/styles/site_theme.css']
})
export class AppComponent implements OnInit {
  dark: boolean;  // Site-wide mode
  ngOnInit() {
    this.dark = false;
  }
}
