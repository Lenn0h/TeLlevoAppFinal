import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutosPageRoutingModule } from './autos-routing.module';

import { AutosPage } from './autos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AutosPage]
})
export class AutosPageModule {}
