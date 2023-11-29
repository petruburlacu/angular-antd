import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  template: ` <h1>Home Component</h1>
  <a [routerLink]="['/dashboard']">Dashboard</a> `,
  styles: [],
  imports: [CommonModule, RouterLink],
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    console.log('Home component loaded');
  }
}
