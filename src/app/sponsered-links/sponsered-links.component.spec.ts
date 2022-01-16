import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponseredLinksComponent } from './sponsered-links.component';

describe('SponseredLinksComponent', () => {
  let component: SponseredLinksComponent;
  let fixture: ComponentFixture<SponseredLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponseredLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponseredLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
