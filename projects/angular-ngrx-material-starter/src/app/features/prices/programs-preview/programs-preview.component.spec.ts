import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsPreviewComponent } from './programs-preview.component';

describe('ProgramsPreviewComponent', () => {
  let component: ProgramsPreviewComponent;
  let fixture: ComponentFixture<ProgramsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
