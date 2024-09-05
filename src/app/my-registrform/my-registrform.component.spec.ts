import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegistrformComponent } from './my-registrform.component';

describe('MyRegistrformComponent', () => {
  let component: MyRegistrformComponent;
  let fixture: ComponentFixture<MyRegistrformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRegistrformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRegistrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
