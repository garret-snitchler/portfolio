import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCheckboxModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
}
