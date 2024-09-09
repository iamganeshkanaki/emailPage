import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDetailsLogComponent } from './email-details-log.component';

describe('EmailDetailsLogComponent', () => {
  let component: EmailDetailsLogComponent;
  let fixture: ComponentFixture<EmailDetailsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDetailsLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDetailsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
