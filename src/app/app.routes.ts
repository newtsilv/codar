import { Routes } from '@angular/router';
import { HeroSection } from './pages/hero-section/hero-section';
import { ChallengeSection } from './pages/challenge-section/challenge-section';

export const routes: Routes = [
  { path: '', component: HeroSection },
  { path: `desafio`, component: ChallengeSection },
];
