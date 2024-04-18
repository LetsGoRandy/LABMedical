import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistorysComponent } from './medical-historys.component';

describe('MedicalHistorysComponent', () => {
  let component: MedicalHistorysComponent;
  let fixture: ComponentFixture<MedicalHistorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalHistorysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalHistorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
