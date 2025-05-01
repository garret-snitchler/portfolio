import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-title>{{ projectTitle }}</mat-card-title>
      <mat-card-content>
        <p>{{ projectDescription }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projectTitle!: string;
  @Input() projectDescription!: string;
}

// <app-project-card
//   [projectTitle]="'Task Tracker'"
//   [projectDescription]="'A tool to manage your daily tasks.'"
// ></app-project-card>
