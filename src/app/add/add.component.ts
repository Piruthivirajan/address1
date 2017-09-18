import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { Address } from '../model/address.model';
import { AddressService } from '../service/address.service'; 

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[AddressService]
})
export class AddComponent{
  address:Address;
    router: Router;
    constructor(private _router: Router){
      this.router=_router;
    }
    submitForm(){
      alert("Saved Successfully");
    }

}

