import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-viewer',
  imports: [],
  template: `
    <div>
      <iframe [src]=pdfSrc height="800px" width="600px"></iframe>
    </div>
  `
})
export class PdfViewerComponent implements OnInit {
  pdfSrc: SafeResourceUrl | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const docID = this.route.snapshot.paramMap.get('docID');
    if (docID) {
      const rawUrl = `${docID}.pdf`;
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    } else {
      console.warn("No docID found in route");
    }
  }
}
