import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructionOnePage } from './instruction-one.page';

describe('InstructionOnePage', () => {
  let component: InstructionOnePage;
  let fixture: ComponentFixture<InstructionOnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstructionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
