import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosAddComponent } from './vehiculos-add.component';

describe('VehiculosAddComponent', () => {
  let component: VehiculosAddComponent;
  let fixture: ComponentFixture<VehiculosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
