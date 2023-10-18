import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards';
  cards = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      subtitle: '@nature',
      content: 'Saw this neat tree during my hike today.',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      subtitle: '@bikingandsports',
      content: 'The bike',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      subtitle: '@mountain',
      content: 'Here is a picture of a snowy mountain.',
    },
  ];
}
