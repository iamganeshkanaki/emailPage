import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmailLogsComponent } from './list-email-logs.component';

describe('ListEmailLogsComponent', () => {
  let component: ListEmailLogsComponent;
  let fixture: ComponentFixture<ListEmailLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEmailLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmailLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
