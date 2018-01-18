import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isOdd = false;

  oddNbrs = [1, 3, 5, 7];
  evenNbrs = [2, 4, 6, 8];

}
