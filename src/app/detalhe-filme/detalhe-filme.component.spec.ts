import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheFilmeComponent } from './detalhe-filme.component';

describe('DetalheFilmeComponent', () => {
  let component: DetalheFilmeComponent;
  let fixture: ComponentFixture<DetalheFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
