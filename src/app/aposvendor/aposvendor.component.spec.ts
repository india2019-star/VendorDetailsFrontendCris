import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AposvendorComponent } from './aposvendor.component';

describe('AposvendorComponent', () => {
  let component: AposvendorComponent;
  let fixture: ComponentFixture<AposvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AposvendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AposvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
