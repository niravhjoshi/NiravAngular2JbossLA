
import {Component} from '@angular/core';
import {errscntbycustomerService} from './errscntbycustomers/errscntbycustomer.service';
@Component({
    selector: 'dashboard-app',
    template:`
    <div><h3>{{pageTitle}}</h3>
    <div> JBoss LogAnalysis dashboard-app</div>
    <dashboard-errcntbycustomer></dashboard-errcntbycustomer>
    </div>
    `,
    providers : [errscntbycustomerService]
})

export class AppComponent{
    pageTitle: string ='Welcome to JBoss Log Analysis Tool ';
}