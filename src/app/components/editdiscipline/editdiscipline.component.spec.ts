import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdisciplineComponent } from './editdiscipline.component';

describe('EditdisciplineComponent', () => {
  let component: EditdisciplineComponent;
  let fixture: ComponentFixture<EditdisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdisciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
