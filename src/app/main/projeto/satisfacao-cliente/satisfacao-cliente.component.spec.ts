import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfacaoClienteComponent } from './satisfacao-cliente.component';

describe('SatisfacaoClienteComponent', () => {
  let component: SatisfacaoClienteComponent;
  let fixture: ComponentFixture<SatisfacaoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfacaoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
