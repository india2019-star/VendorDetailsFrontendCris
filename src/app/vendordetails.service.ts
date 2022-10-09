import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IVendor } from './shared/models/vendormodel';

@Injectable({
  providedIn: 'root'
})
export class VendordetailsService {

  baseUrl = environment.baseUrl;
  interfaceTypesArr = ['Touch Screen', 'Display Board'];

  constructor(private http: HttpClient) { }

  // private refreshauto = new Subject<void>();
  // get RefreshAuto()
  // {
  //   return this.refreshauto;
  // }

  getVendorDetails()
  {
    return this.http.get<IVendor[]>(this.baseUrl + "/vendors/vendordetails");
  }

  insertVendorDetails(data: any)
  {
    return this.http.post<any>(this.baseUrl + "/vendors",data);
      // .pipe(tap(()=>{
      //   this.RefreshAuto.next();
      // }));
  }

  vendorIdExists(vendorId : any)
  {
    return this.http.get<any>(this.baseUrl + `/vendors/vendoridexists/${vendorId}`);
  }

  getInterfaceTypes()
  {
    return this.interfaceTypesArr;
  }


}
