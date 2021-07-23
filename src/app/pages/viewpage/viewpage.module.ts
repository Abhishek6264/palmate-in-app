import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpagePageRoutingModule } from './viewpage-routing.module';

import { ViewpagePage } from './viewpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpagePageRoutingModule
  ],
  declarations: [ViewpagePage]
})
export class ViewpagePageModule {}
