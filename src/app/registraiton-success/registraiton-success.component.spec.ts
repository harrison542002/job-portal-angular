import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraitonSuccessComponent } from './registraiton-success.component';

describe('RegistraitonSuccessComponent', () => {
  let component: RegistraitonSuccessComponent;
  let fixture: ComponentFixture<RegistraitonSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraitonSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraitonSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
