import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBoxesComponent } from './top-boxes.component';

describe('TopBoxesComponent', () => {
  let component: TopBoxesComponent;
  let fixture: ComponentFixture<TopBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBoxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
