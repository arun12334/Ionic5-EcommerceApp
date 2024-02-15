import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-one',
  templateUrl: 'instruction-one.page.html',
  styleUrls: ['instruction-one.page.scss'],
})
export class InstructionOnePage {

  constructor(private router: Router) {}

  // Method to handle the button click and navigate to InstructionTwoPage
  goToInstructionTwoPage() {
    this.router.navigateByUrl('/instruction-two');
  }
}
