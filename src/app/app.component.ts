import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'keds-wedding';
  links = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Location',
      link: '/location',
    },
    {
      title: 'What to Do',
      link: '/whattodo',
    },
    {
      title: 'Wedding Party',
      link: '/wedding-party',
    },
  ];
  activeLink: any = this.links[0].link;
}
