import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPortalUserComponent } from './idea-portal-user.component';

describe('IdeaPortalUserComponent', () => {
  let component: IdeaPortalUserComponent;
  let fixture: ComponentFixture<IdeaPortalUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaPortalUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPortalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
