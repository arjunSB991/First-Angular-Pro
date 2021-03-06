import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeGoalsComponent } from './life-goals.component';

describe('LifeGoalsComponent', () => {
  let component: LifeGoalsComponent;
  let fixture: ComponentFixture<LifeGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
