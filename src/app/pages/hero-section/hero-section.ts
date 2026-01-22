import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { Card } from './components/card/card';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-hero-section',
  imports: [Header, Footer, Card],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

}
