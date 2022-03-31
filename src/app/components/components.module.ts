import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';

const PAGES = [PickupCallCardComponent];
@NgModule({
  declarations: PAGES,
  exports: PAGES,
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
