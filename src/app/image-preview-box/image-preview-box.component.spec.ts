import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePreviewBoxComponent } from './image-preview-box.component';

describe('ImagePreviewBoxComponent', () => {
  let component: ImagePreviewBoxComponent;
  let fixture: ComponentFixture<ImagePreviewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePreviewBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePreviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
