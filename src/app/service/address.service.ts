import { Injectable } from '@angular/core'; 
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'; 

import 'rxjs/add/operator/toPromise';

@Injectable() 
export class AddressService {
constructor(private http: Http) 
{

}

}