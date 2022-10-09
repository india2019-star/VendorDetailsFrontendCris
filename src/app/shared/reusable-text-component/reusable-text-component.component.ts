import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reusable-text-component',
  templateUrl: './reusable-text-component.component.html',
  styleUrls: ['./reusable-text-component.component.css']
})
export class ReusableTextComponentComponent implements OnInit,ControlValueAccessor {

  @ViewChild('input',{static:true}) input! : ElementRef;
  @Input()type = 'text';
  @Input()label!: string;
  @Input()placeholder!:string;



  constructor(@Self() public controlDir: NgControl) { 
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control?.validator ? [control?.validator] : [];
    const asyncValidators = control?.asyncValidator? [control?.asyncValidator] : [];

    control?.setValidators(validators);
    control?.setAsyncValidators(asyncValidators);
    control?.updateValueAndValidity();


  }


  onChange(event:any)
  {
      
  }

  onTouched()
  {

  }

 
  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }



}
