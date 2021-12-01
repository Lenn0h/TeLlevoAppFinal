import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [EncabezadoComponent,FooterComponent],
  exports:[EncabezadoComponent,FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
