import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindinbgComponent } from './data-bindinbg.component';

describe('DataBindinbgComponent', () => {
  let component: DataBindinbgComponent;
  let fixture: ComponentFixture<DataBindinbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindinbgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindinbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
