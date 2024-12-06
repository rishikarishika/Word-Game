import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordLadderComponent } from './word-ladder.component';

describe('WordLadderComponent', () => {
  let component: WordLadderComponent;
  let fixture: ComponentFixture<WordLadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordLadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
