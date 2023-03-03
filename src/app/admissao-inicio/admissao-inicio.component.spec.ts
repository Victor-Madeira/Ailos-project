import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissaoInicioComponent } from './admissao-inicio.component';

describe('AdmissaoInicioComponent', () => {
  let component: AdmissaoInicioComponent;
  let fixture: ComponentFixture<AdmissaoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissaoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissaoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
