import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer'

@Component({
  selector: 'app-me',
  imports: [PdfViewerModule],
  templateUrl: './me.component.html',
  styleUrl: '../app.component.css'
})
export class MeComponent {
  pdfSrc = "Resume.pdf";
}
