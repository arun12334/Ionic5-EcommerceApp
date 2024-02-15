import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructionTwoPageRoutingModule } from './instruction-two-routing.module';

import { InstructionTwoPage } from './instruction-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructionTwoPageRoutingModule
  ],
  declarations: [InstructionTwoPage]
})
export class InstructionTwoPageModule {}
