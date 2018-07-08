import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHtmlFileComponent } from './create-html-file.component';

describe('CreateHtmlFileComponent', () => {
  let component: CreateHtmlFileComponent;
  let fixture: ComponentFixture<CreateHtmlFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHtmlFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHtmlFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
