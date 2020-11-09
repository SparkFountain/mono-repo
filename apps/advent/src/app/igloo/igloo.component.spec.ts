import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IglooComponent } from './igloo.component';

describe('IglooComponent', () => {
  let component: IglooComponent;
  let fixture: ComponentFixture<IglooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IglooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IglooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
