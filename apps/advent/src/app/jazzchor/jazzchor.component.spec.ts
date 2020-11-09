import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzchorComponent } from './jazzchor.component';

describe('JazzchorComponent', () => {
  let component: JazzchorComponent;
  let fixture: ComponentFixture<JazzchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JazzchorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JazzchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
