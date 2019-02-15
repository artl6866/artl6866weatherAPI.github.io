import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiheiComponent } from './kihei.component';

describe('KiheiComponent', () => {
  let component: KiheiComponent;
  let fixture: ComponentFixture<KiheiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiheiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiheiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
