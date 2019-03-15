import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MipaginaPage } from './mipagina.page';

describe('MipaginaPage', () => {
  let component: MipaginaPage;
  let fixture: ComponentFixture<MipaginaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MipaginaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MipaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
