import { addCustomer } from './../../store/customer.actions';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

import { CustomerFacade } from '~customers/services/customer.facade';
import { Countries } from '~types/countries';
import { Country } from '~types/country';
import { Customer } from '~types/customer';
import { CustomerState } from '~customers/store/customer.reducer';

@Component({
  selector: 'app-new-customer-form',
  templateUrl: './new-customer-form.component.html',
  styleUrls: ['./new-customer-form.component.scss']
})
export class NewCustomerPageComponent implements OnInit, OnDestroy {

  id: number;
  leadForm: FormGroup;
  customer: Customer;
  countries: Country[] = new Countries().countries;
  submitted = false;
  private destroyed$ = new Subject<boolean>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<CustomerState>,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.leadForm = new FormGroup({
      customername: new FormControl('', Validators.required),
      addressline1: new FormControl('', Validators.required),
      addressline2: new FormControl(''),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      vat: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      phonenumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSubmit() {
    this.submitted = true;
    if (this.leadForm.invalid) {
      this.toastr.error('You must fill the required fields!');
      return;
    }
    const customer: Customer = {
      id: "string",
      customername: this.leadForm.value.customername,
      projectname: this.leadForm.value.projectname || 'presales',
      status: 'BAFO',
      date: 'end of september',
      firstname: this.leadForm.value.firstname,
      lastname: this.leadForm.value.lastname,
      email: this.leadForm.value.email,
      phonenumber: this.leadForm.value.phonenumber,
      vat: this.leadForm.value.vat,
      address: {
        addressline1: this.leadForm.value.addressline1,
        addressline2: this.leadForm.value.addressline2,
        city: this.leadForm.value.city,
        state: this.leadForm.value.state,
        country: this.leadForm.value.country,
        zip: this.leadForm.value.zip
      }
    }
    // this.store.addCustomer(customer);
    this.store.dispatch(addCustomer({customer}))
    // this.router.navigate(['../customer-detail', customer.id], { relativeTo: this.route });
    this.leadForm.reset();
    this.submitted = false;
  }

}
