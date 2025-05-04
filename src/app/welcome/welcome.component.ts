import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-welcome',
  imports: [ProjectCardComponent],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

}
