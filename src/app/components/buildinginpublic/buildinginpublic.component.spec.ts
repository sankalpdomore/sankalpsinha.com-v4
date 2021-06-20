import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Buildinginpublic2Component } from './buildinginpublic.component';

describe('BuildinginpublicComponent', () => {
  let component: BuildinginpublicComponent;
  let fixture: ComponentFixture<Buildinginpublic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildinginpublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildinginpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
