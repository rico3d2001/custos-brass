import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstProjetosComponent } from './lst-projetos.component';

describe('LstProjetosComponent', () => {
  let component: LstProjetosComponent;
  let fixture: ComponentFixture<LstProjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstProjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
