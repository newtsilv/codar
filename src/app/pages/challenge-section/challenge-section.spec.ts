import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeSection } from './challenge-section';

describe('ChallengeSection', () => {
  let component: ChallengeSection;
  let fixture: ComponentFixture<ChallengeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
