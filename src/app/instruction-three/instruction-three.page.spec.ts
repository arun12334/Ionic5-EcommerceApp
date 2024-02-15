import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructionThreePage } from './instruction-three.page';

describe('InstructionThreePage', () => {
  let component: InstructionThreePage;
  let fixture: ComponentFixture<InstructionThreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstructionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
