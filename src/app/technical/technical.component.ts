import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-technical',
  imports: [ProjectCardComponent],
  templateUrl: './technical.component.html',
  // styleUrl: './technical.component.css'
})
export class TechnicalComponent {

}
