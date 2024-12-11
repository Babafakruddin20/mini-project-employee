import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllemployeesDetailsComponent } from './allemployees-details.component';

describe('AllemployeesDetailsComponent', () => {
  let component: AllemployeesDetailsComponent;
  let fixture: ComponentFixture<AllemployeesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllemployeesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllemployeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
