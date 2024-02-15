import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructionOnePageRoutingModule } from './instruction-one-routing.module';

import { InstructionOnePage } from './instruction-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructionOnePageRoutingModule
  ],
  declarations: [InstructionOnePage]
})
export class InstructionOnePageModule {}
