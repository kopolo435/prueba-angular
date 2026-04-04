import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-non-auth-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './non-auth-layout.html',
  styleUrl: './non-auth-layout.scss',
})
export class NonAuthLayout {
  constructor() {
    console.log('Non-auth constructor called');
  }
}
