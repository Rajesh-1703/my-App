import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeeshoComponent } from './meesho.component';

describe('MeeshoComponent', () => {
  let component: MeeshoComponent;
  let fixture: ComponentFixture<MeeshoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeeshoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeeshoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
