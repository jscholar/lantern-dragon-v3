import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  // Theme for the entire site
  styleUrls: ['./app.component.css', '../assets/styles/theme_dark.css']
})
export class AppComponent {
  title = 'app';
}
