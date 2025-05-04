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
  {
    path: '',
    component: WelcomeComponent,
    title: 'Welcome'
  },
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
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export default routeConfig;
