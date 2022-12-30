import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdisciplineComponent } from './newdiscipline.component';

describe('NewdisciplineComponent', () => {
  let component: NewdisciplineComponent;
  let fixture: ComponentFixture<NewdisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
