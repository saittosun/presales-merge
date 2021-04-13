import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Customer } from '~types/customer';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerService {
  fetchCustomers(): Observable<Customer[]> {
    return of([
      {
        id: "1",
        customername: '34bd4e53-029d-4743-831a-35efc0e003f4',
        projectname: 'renson',
        status: 'offer',
        date: 'end of june',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'test@test.com',
        phonenumber: 11111111,
        vat: 11,
        address: {
          addressline1: 'kouterbaan',
          city: 'denderleeuw',
          state: 'oost-vlanderen',
          country: 'belgie',
          zip: 9470
        }
      },
      {
        id: "2",
        customername: 'Digipolis Antwerpen',
        projectname: 'Antwerpen Morgen',
        status: 'offer',
        date: '11/05/2021',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'test@test.com',
        phonenumber: 22222222,
        vat: 11,
        address: {
          addressline1: 'kouterbaan',
          city: 'denderleeuw',
          state: 'oost-vlanderen',
          country: 'belgie',
          zip: 9470
        }
      },
      {
        id: "3",
        customername: 'Digipolis Antwerpen',
        projectname: 'Nova',
        status: 'BAFO',
        date: '12/05/2022',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'test@test.com',
        phonenumber: 11111111,
        vat: 11,
        address: {
          addressline1: 'kouterbaan',
          city: 'denderleeuw',
          state: 'oost-vlanderen',
          country: 'belgie',
          zip: 9470
        }
      },
      {
        id: "4",
        customername: '14bd4e53-029d-4743-831a-35efc0e003f4',
        projectname: 'Mono',
        status: 'offer',
        date: 'end of june',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'test@test.com',
        phonenumber: 11111111,
        vat: 11,
        address: {
          addressline1: 'kouterbaan',
          city: 'denderleeuw',
          state: 'oost-vlanderen',
          country: 'belgie',
          zip: 9470
        }
      },
      {
        id: "5",
        customername: '14bd4e53-029d-4743-831a-35efc0e003f4',
        projectname: 'presales',
        status: 'offer',
        date: 'end of june',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'test@test.com',
        phonenumber: 11111111,
        vat: 11,
        address: {
          addressline1: 'kouterbaan',
          city: 'denderleeuw',
          state: 'oost-vlanderen',
          country: 'belgie',
          zip: 9470
        }
      },
    ])
  }



  // updateCustomer(id: string, customer: Customer): Observable<Customer> {
  //   return of({...customer, id})
  // }

  updateCustomer(customerId: string | number, changes: Partial<Customer>){
    return of({customerId, changes})
  }

  addCustomer(customer: Customer): Observable<Customer>{
    return of({...customer})
  }

  getCustomer(id: string): Observable<Customer> {
    return this.fetchCustomers().pipe(map(customers => customers.find(customer => customer.id === id )))
  }
}
