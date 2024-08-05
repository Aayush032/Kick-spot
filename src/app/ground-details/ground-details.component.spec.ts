import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundDetailsComponent } from './ground-details.component';

describe('GroundDetailsComponent', () => {
  let component: GroundDetailsComponent;
  let fixture: ComponentFixture<GroundDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroundDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
