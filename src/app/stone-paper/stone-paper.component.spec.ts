import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonePaperComponent } from './stone-paper.component';

describe('StonePaperComponent', () => {
  let component: StonePaperComponent;
  let fixture: ComponentFixture<StonePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
