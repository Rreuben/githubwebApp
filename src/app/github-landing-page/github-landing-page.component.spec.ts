import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubLandingPageComponent } from './github-landing-page.component';

describe('GithubLandingPageComponent', () => {
  let component: GithubLandingPageComponent;
  let fixture: ComponentFixture<GithubLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
