import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRowComponent } from './link-row.component';

describe('LinkRowComponent', () => {
  let component: LinkRowComponent;
  let fixture: ComponentFixture<LinkRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
