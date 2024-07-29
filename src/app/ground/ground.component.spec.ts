import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundComponent } from './ground.component';

describe('GroundComponent', () => {
  let component: GroundComponent;
  let fixture: ComponentFixture<GroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
