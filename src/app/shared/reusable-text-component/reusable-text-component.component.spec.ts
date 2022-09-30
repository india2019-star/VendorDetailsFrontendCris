import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTextComponentComponent } from './reusable-text-component.component';

describe('ReusableTextComponentComponent', () => {
  let component: ReusableTextComponentComponent;
  let fixture: ComponentFixture<ReusableTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTextComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
