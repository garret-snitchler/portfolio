import { Routes } from '@angular/router';
import { TechnicalComponent } from './technical/technical.component';
import { MeComponent } from './me/me.component';
import { CreativeComponent } from './creative/creative.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

const routeConfig: Routes = [
  {
    path: 'documents/:docID',
    component: PdfViewerComponent
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
  // also serving as welcome page right now
  { path: '**', redirectTo: '/technical', pathMatch: 'full' },
];

export default routeConfig;
