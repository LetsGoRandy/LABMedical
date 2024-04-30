import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatientsComponent } from './card-patients.component';

describe('CardPatientsComponent', () => {
  let component: CardPatientsComponent;
  let fixture: ComponentFixture<CardPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPatientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
