import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChooseComponent } from './project-choose.component';

describe('ProjectChooseComponent', () => {
  let component: ProjectChooseComponent;
  let fixture: ComponentFixture<ProjectChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
