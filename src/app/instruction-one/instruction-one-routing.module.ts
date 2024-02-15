import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionOnePage } from './instruction-one.page';

const routes: Routes = [
  {
    path: '',
    component: InstructionOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructionOnePageRoutingModule {}
