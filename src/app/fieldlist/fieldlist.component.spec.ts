import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldlistComponent } from './fieldlist.component';

describe('FieldlistComponent', () => {
  let component: FieldlistComponent;
  let fixture: ComponentFixture<FieldlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
