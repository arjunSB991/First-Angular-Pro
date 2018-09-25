import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPracticesComponent } from './bootstrap-practices.component';

describe('BootstrapPracticesComponent', () => {
  let component: BootstrapPracticesComponent;
  let fixture: ComponentFixture<BootstrapPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
