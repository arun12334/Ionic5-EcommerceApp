import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-three',
  templateUrl: 'instruction-three.page.html',
  styleUrls: ['instruction-three.page.scss'],
})
export class InstructionThreePage {

  constructor(private router: Router) {}

  // Method to handle the button click and navigate to another page
  goToAnotherPage() {
    // Replace 'another-page' with the actual route of the page you want to navigate to
    this.router.navigateByUrl('/another-page');
  }
}
