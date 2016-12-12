import {PipeTransform,Pipe} from '@angular/core';
import {IerrscntbyCustomers} from './errscntbycust'

@Pipe({
    name: 'errcntbyCustFilter'
})

export class ErrcntbyCustomerFilterPipe implements PipeTransform{

 transform(value: IerrscntbyCustomers[],fileterBy:string):IerrscntbyCustomers[]{
     fileterBy = fileterBy ? fileterBy.toLocaleLowerCase() : null;
     return fileterBy ? value.filter((errscntbycust: IerrscntbyCustomers) =>
     errscntbycust.cust_name.toLocaleLowerCase().indexOf(fileterBy) !== -1): value;
 }   
}
