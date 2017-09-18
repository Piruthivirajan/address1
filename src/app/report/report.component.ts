import { Component } from '@angular/core';
import { Address } from '../model/address.model';
@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
address:Address;
addressList:Address;
editAddress(value:any){
alert("Record Edited");
}
deleteAddress(value:any){
alert("Record Deleted");
}
}

