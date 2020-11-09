import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceSkatingComponent } from './ice-skating.component';

describe('IceSkatingComponent', () => {
  let component: IceSkatingComponent;
  let fixture: ComponentFixture<IceSkatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceSkatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceSkatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
