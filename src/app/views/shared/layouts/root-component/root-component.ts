import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-component',
  imports: [Navbar,
    RouterOutlet],
  templateUrl: './root-component.html',
  styleUrl: './root-component.scss',
})
export class RootComponent {

}
