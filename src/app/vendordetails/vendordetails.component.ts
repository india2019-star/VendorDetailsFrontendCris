import { VendordetailsService } from './../vendordetails.service';
import { Component, OnInit } from '@angular/core';
import { IVendor } from '../shared/models/vendormodel';

@Component({
  selector: 'app-vendordetails',
  templateUrl: './vendordetails.component.html',
  styleUrls: ['./vendordetails.component.css']
})
export class VendordetailsComponent implements OnInit {

  vendorDetails : IVendor[] = [];
  searchTerm : any;
  pageNumber : number = 1;
  constructor(private service : VendordetailsService) { }

  ngOnInit(): void {
     this.getVendorDetails();
  }

  getVendorDetails()
  {
    this.service.getVendorDetails().subscribe((response : IVendor[]) =>{
      this.vendorDetails = response;
     // console.log(response);
    },error => {
      console.log(error);
    });
  }

}
