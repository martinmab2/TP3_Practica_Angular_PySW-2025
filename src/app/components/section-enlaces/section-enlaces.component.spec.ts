import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEnlacesComponent } from './section-enlaces.component';

describe('SectionEnlacesComponent', () => {
  let component: SectionEnlacesComponent;
  let fixture: ComponentFixture<SectionEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionEnlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
