import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionThreePage } from './instruction-three.page';

const routes: Routes = [
  {
    path: '',
    component: InstructionThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructionThreePageRoutingModule {}
