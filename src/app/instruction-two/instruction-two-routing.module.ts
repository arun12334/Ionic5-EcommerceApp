import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionTwoPage } from './instruction-two.page';

const routes: Routes = [
  {
    path: '',
    component: InstructionTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructionTwoPageRoutingModule {}
