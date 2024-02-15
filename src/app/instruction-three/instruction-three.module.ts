import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructionThreePageRoutingModule } from './instruction-three-routing.module';

import { InstructionThreePage } from './instruction-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructionThreePageRoutingModule
  ],
  declarations: [InstructionThreePage]
})
export class InstructionThreePageModule {}
