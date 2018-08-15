import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProImagesGalleryComponent } from './pro-images-gallery.component';

describe('ProImagesGalleryComponent', () => {
  let component: ProImagesGalleryComponent;
  let fixture: ComponentFixture<ProImagesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProImagesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProImagesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
