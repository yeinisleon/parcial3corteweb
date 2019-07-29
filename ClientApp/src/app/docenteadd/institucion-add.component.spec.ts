import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionAddComponent } from './institucion-add.component';

describe('InstitucionAddComponent', () => {
  let component: InstitucionAddComponent;
  let fixture: ComponentFixture<InstitucionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
