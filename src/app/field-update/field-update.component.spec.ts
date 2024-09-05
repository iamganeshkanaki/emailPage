import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldUpdateComponent } from './field-update.component';

describe('FieldUpdateComponent', () => {
  let component: FieldUpdateComponent;
  let fixture: ComponentFixture<FieldUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
