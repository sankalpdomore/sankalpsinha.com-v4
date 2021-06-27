import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletempmessageComponent } from './mobiletempmessage.component';

describe('MobiletempmessageComponent', () => {
  let component: MobiletempmessageComponent;
  let fixture: ComponentFixture<MobiletempmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiletempmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiletempmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
