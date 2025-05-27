import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetaskComponent } from './thetask.component';

describe('ThetaskComponent', () => {
  let component: ThetaskComponent;
  let fixture: ComponentFixture<ThetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThetaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
