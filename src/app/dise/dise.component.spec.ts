import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseComponent } from './dise.component';

describe('DiseComponent', () => {
  let component: DiseComponent;
  let fixture: ComponentFixture<DiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
