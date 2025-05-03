import { Routes } from '@angular/router';
import { TechnicalComponent } from './technical/technical.component';
import { MeComponent } from './me/me.component';

const routeConfig: Routes = [
  {
    path: 'technical',
    component: TechnicalComponent,
    title: 'Technical Projects'
  },
  {
    path: 'me',
    component: MeComponent,
    title: "About Me"
  }
];

export default routeConfig;
