import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblProjetosComponent } from './tbl-projetos.component';

describe('TblProjetosComponent', () => {
  let component: TblProjetosComponent;
  let fixture: ComponentFixture<TblProjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblProjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
