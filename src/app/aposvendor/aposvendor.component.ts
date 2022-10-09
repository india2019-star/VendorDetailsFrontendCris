import { VendordetailsService } from './../vendordetails.service';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IVendor } from '../shared/models/vendormodel';
import { map, Observable, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-aposvendor',
  templateUrl: './aposvendor.component.html',
  styleUrls: ['./aposvendor.component.css']
})
export class AposvendorComponent implements OnInit {

  vendorForm!: FormGroup;
  
  interfaceTypesArr: string[] = [];
  

  constructor(private router: Router,
              private service: VendordetailsService) { }

  ngOnInit(): void {
    
    this.interfaceTypesArr = this.service.getInterfaceTypes();
    this.createForm();
  }

  createForm()
  {
    this.vendorForm = new FormGroup({
      vendorId : new FormControl('',[Validators.required],this.validateVendorUniqueness()),
      vendorName : new FormControl('',[Validators.required]),
      zoneCode : new FormControl('',[Validators.required]),
      divisionCode : new FormControl('',[Validators.required]),
      locationCode : new FormControl('',[Validators.required]),
      ipAddress : new FormControl('',[Validators.required]),
      interfaceType : new FormControl('',[Validators.required]),
    });
  }

  displayDetails()
  {
    console.log(this.vendorForm.value);
   this.service.insertVendorDetails(this.vendorForm.value).subscribe((response)=>{
     alert("Vendor Details Submitted Successfully!!!");
    console.log(response);
   },error => {
    alert("Error Submitting Vendor Details!!! Try Again later");
    console.log(error);
   });
   
   this.createForm();
  }

  

  validateVendorUniqueness(): AsyncValidatorFn{
    return control => {
      return timer(500).pipe(
        switchMap(()=>{
          if(!control.value)
          {
            return of(null);
          }
          return this.service.vendorIdExists(control.value).pipe(
           map(res => {
            return res ? {vendorNotUnique : true} : null;
           })
          );
        })
      );
    };
  }

}
