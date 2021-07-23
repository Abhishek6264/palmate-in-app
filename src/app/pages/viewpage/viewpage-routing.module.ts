import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpagePage } from './viewpage.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpagePageRoutingModule {}
