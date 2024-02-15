import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  // Method to handle the button click and navigate to InstructionOnePage
  goToInstructionOnePage() {
    this.router.navigateByUrl('/instruction-one');
  }
}
