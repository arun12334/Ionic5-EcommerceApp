import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructionTwoPage } from './instruction-two.page';

describe('InstructionTwoPage', () => {
  let component: InstructionTwoPage;
  let fixture: ComponentFixture<InstructionTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstructionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
