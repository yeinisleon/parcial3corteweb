import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstitucionComponent } from './lista-institucion.component';

describe('ListaInstitucionComponent', () => {
  let component: ListaInstitucionComponent;
  let fixture: ComponentFixture<ListaInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
