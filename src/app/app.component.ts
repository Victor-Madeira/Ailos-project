import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo:string = "assets/images/ailosLogoP.png";
  title = 'ailos-admissao-cooperado';
  opened = true;
  thedev:string = "assets/images/thedev.png";
}
