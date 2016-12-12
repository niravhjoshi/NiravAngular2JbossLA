import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IerrscntbyCustomers} from './errscntbycust';


@Injectable()
export class errscntbycustomerService{

private _errscntbycustomerUrl = 'http://127.0.0.1:8000/centurionapi/dwercnt';
constructor (private _http: Http){

}
geterrscntbyCustomer(): Observable<IerrscntbyCustomers[]>{
    return this._http.get(this._errscntbycustomerUrl)
            .map((response: Response) => <IerrscntbyCustomers[]> response.json())
            .do(data => console.log('All:'+ JSON.stringify(data)))
            .catch(this.handleError);

        }

private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');

    }   
}