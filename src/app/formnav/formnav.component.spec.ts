import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnavComponent } from './formnav.component';

describe('FormnavComponent', () => {
  let component: FormnavComponent;
  let fixture: ComponentFixture<FormnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
