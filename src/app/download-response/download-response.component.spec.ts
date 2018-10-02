import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadResponseComponent } from './download-response.component';

describe('DownloadResponseComponent', () => {
  let component: DownloadResponseComponent;
  let fixture: ComponentFixture<DownloadResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
