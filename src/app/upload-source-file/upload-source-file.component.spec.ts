import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSourceFileComponent } from './upload-source-file.component';

describe('UploadSourceFileComponent', () => {
  let component: UploadSourceFileComponent;
  let fixture: ComponentFixture<UploadSourceFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSourceFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSourceFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
