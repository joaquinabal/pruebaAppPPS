import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlpashPage } from './slpash.page';

describe('SlpashPage', () => {
  let component: SlpashPage;
  let fixture: ComponentFixture<SlpashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlpashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
