import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-title>{{ projectTitle }}</mat-card-title>
      <mat-card-content>
        <p>{{ projectDescription }}</p>
        <a *ngIf="isStory" [routerLink]="['/documents', projectTitle]">Read Here</a>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projectTitle!: string;
  @Input() projectDescription!: string;
  @Input() isStory!: boolean;
}
