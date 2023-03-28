import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBeneficiarioComponent } from './register-beneficiario.component';

describe('RegisterBeneficiarioComponent', () => {
  let component: RegisterBeneficiarioComponent;
  let fixture: ComponentFixture<RegisterBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
