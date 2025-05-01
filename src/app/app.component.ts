import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCardComponent, MatButtonModule, MatIconModule, MatSidenavModule, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
