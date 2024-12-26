import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
//import {HomeComponent, MainComponent } from './main.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My project';
  nav = [
    { href: '/', title: 'Home' },
    { href: '/todo', title: 'todo' }
  ];
}
