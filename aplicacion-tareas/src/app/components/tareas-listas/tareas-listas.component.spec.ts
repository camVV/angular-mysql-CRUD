import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasListasComponent } from './tareas-listas.component';

describe('TareasListasComponent', () => {
  let component: TareasListasComponent;
  let fixture: ComponentFixture<TareasListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
