import { Routes } from '@angular/router';
import { TechnicalComponent } from './technical/technical.component';
import { MeComponent } from './me/me.component';
import { CreativeComponent } from './creative/creative.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routeConfig: Routes = [
  {
    path: 'documents/:docID',
    component: PdfViewerComponent
  },
  // { the welcome page is kind of bad so we are not going to have it anymore
  //   path: '',
  //   component: WelcomeComponent,
  //   title: 'Welcome'
  // },
  {
    path: 'technical',
    component: TechnicalComponent,
    title: 'Technical Projects'
  },
  {
    path: 'creative',
    component: CreativeComponent,
    title: 'Creative Projects'
  },
  {
    path: 'me',
    component: MeComponent,
    title: "About Me"
  },
  { path: '**', redirectTo: 'technical', pathMatch: 'full' },
];

export default routeConfig;
