import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aposvendor',
  templateUrl: './aposvendor.component.html',
  styleUrls: ['./aposvendor.component.css']
})
export class AposvendorComponent implements OnInit {

  vendorForm!: FormGroup;
  vendorDetails: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm()
  {
    this.vendorForm = new FormGroup({
      vendorId : new FormControl('',[Validators.required]),
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
    this.vendorDetails.push(this.vendorForm.value);
    this.createForm();
  }

}
