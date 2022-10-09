import { AboutComponent } from './about/about.component';
import { VendordetailsComponent } from './vendordetails/vendordetails.component';
import { AposvendorComponent } from './aposvendor/aposvendor.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vendorform', component: AposvendorComponent},
  {path: 'vendordetails', component: VendordetailsComponent},
  {path: 'aboutus', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
