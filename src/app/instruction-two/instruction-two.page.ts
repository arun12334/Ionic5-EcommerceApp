import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-two',
  templateUrl: 'instruction-two.page.html',
  styleUrls: ['instruction-two.page.scss'],
})
export class InstructionTwoPage {

  constructor(private router: Router) {}

  // Method to handle the button click and navigate to InstructionThreePage
  goToInstructionThreePage() {
    this.router.navigateByUrl('/instruction-three');
  }
}
