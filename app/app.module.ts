import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {ErrscntbyCustomersComponent} from './errscntbycustomers/errscntbycustomers-list.component';
import {ErrcntbyCustomerFilterPipe} from './errscntbycustomers/ErrcntbyCustomerFilter.pipe';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,ErrscntbyCustomersComponent,ErrcntbyCustomerFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
