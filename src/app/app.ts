import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from "./pages/hero-section/hero-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('codar');
}
