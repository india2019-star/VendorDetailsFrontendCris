import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTextComponentComponent } from './reusable-text-component/reusable-text-component.component';



@NgModule({
  declarations: [
    ReusableTextComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReusableTextComponentComponent
  ]
})
export class SharedModule { }
