import { loadLead } from './../../store/lead.actions';
import { LeadState } from './../../store/lead.reducer';
import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CustomerFacade } from '~customers/services/customer.facade';
import { Lead } from '~types/lead';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { selectedLead } from '../../store/lead.selector';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailPageComponent implements OnInit, OnDestroy {
  statusResolutionForm : FormGroup;
  private destroyed$ = new Subject<boolean>();
  leads: Lead[];
  lead: Lead;
  id: string;
  activeResolution: string;
  resolutionArray: string[] = environment.resolution
  activeStatus: string;
  statusArray: string[] = environment.status
  lead$: Observable<Lead>;
  model: any;

  constructor(private store: Store<LeadState>,
              private route: ActivatedRoute,
              private customerFacade: CustomerFacade,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.store.dispatch(loadLead({id: this.route.snapshot.paramMap.get('id')}))
    this.lead$ = this.store.pipe(select(selectedLead))
    this.store.pipe(select(selectedLead)).subscribe(lead =>
      this.model = lead)
      console.log(this.model.status);
      this.activeStatus = this.model.status;
      this.activeResolution = this.model.resolution;
      this.createStatusResolutionForm();
  }

  onHandleCustomer() {
    // const customerName = this.model.customer;
    // this.customerFacade.getCustomers().subscribe(customers => {
    //   customers.forEach(customer => {
    //     if(customer.customername === customerName) {
    //       this.router.navigate(['customers/customer-detail', customer.id])
    //     }
    //   })
    // })
  }

  private createStatusResolutionForm() {
    this.statusResolutionForm = this.fb.group({
      statusForm: new FormControl(this.model.status, Validators.required),
      resolutionForm: new FormControl(this.model.resolution, Validators.required)
    })
  }

  onStatusChange() {
    this.activeStatus = this.statusResolutionForm.value.statusForm;
  }

  onResolutionChange() {
    this.activeResolution = this.statusResolutionForm.value.resolutionForm;
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
