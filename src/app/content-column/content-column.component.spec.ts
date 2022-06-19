import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentColumnComponent } from './content-column.component';

describe('ContentColumnComponent', () => {
  let component: ContentColumnComponent;
  let fixture: ComponentFixture<ContentColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
