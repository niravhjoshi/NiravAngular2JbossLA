import {Component,OnInit} from '@angular/core';
import {IerrscntbyCustomers} from './errscntbycust';
import {errscntbycustomerService} from './errscntbycustomer.service'
@Component({
    selector : 'dashboard-errcntbycustomer',
    moduleId: module.id,
    styleUrls : ['errscntbycustomers-list.component.css'],
    templateUrl : 'errscntbycustomers-list.component.html'
})
export class ErrscntbyCustomersComponent implements OnInit{
    pageTitle : string = "Count of Errors by Customers:-";
    showGraphs : boolean = false;
    listFilter : string ;
    errorMessage : string;
    errscntbyCustomers : IerrscntbyCustomers[];
    

    constructor(private _errscntbycustomer: errscntbycustomerService){

    }
    toggeleGraphs():void{
        this.showGraphs = !this.showGraphs;
    }
    ngOnInit(): void{
        console.log('Inside OnInit');
        this._errscntbycustomer.geterrscntbyCustomer()
        .subscribe(errscntbyCustomers => this.errscntbyCustomers = errscntbyCustomers,
        error => this.errorMessage = <any>error);



       
    }
}