import { addLead, loadLead } from './../../store/lead.actions';
import { LeadState } from './../../store/lead.reducer';
import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { LeadService } from './../../services/lead.service';
import { v4 as uuidv4 } from 'uuid';
import { Lead } from './../../../types/lead';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { LeadFacade } from '../../services/lead.facade';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-lead-form',
  templateUrl: './new-lead-form.component.html',
  styleUrls: ['./new-lead-form.component.scss']
})
export class NewLeadPageComponent implements OnInit {
  statusArray: string[] = environment.status;
  resolutionArray: string[] = environment.resolution
  timelineData: string;
  leadNewForm: FormGroup;
  lead: Lead;
  leads: Lead[];
  submitted = false;
  private destroyed$ = new Subject<boolean>();

  constructor(private fb: FormBuilder,
              private store: Store<LeadState>,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.createLeadForm()
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private createLeadForm() {
    this.leadNewForm = this.fb.group({
      leadname: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      status: new FormControl('lead', Validators.required),
      pitchDate: new FormControl(''),
      offerDate: new FormControl(''),
      presantationDate: new FormControl(''),
      bafoDate: new FormControl(''),
      startDate: new FormControl(''),
      resolution: new FormControl('ongoing', Validators.required),
      resolutionComment: new FormControl(''),
      notes: new FormControl(''),
    })
  }

  onStatusChange() {
    this.timelineData = this.leadNewForm.value.status;
  }

  onResolutionChange() {
    this.timelineData = this.leadNewForm.value.resolution;
  }

  onSubmit() {
    this.submitted = true;
    const lead: Lead = {
      id: uuidv4(),
      name: this.leadNewForm.value.leadname,
      status: this.leadNewForm.value.status,
      resolution: this.leadNewForm.value.resolution,
      customer: this.leadNewForm.value.customer,
      resolutionComment: this.leadNewForm.value.resolutionComment,
      pitchDate: this.leadNewForm.value.pitchDate,
      offerDate: this.leadNewForm.value.offerDate,
      offerPresentationDate: this.leadNewForm.value.presantationDate,
      bafoDate: this.leadNewForm.value.bafoDate,
      startDate: this.leadNewForm.value.startDate,
      notes: this.leadNewForm.value.notes
    }
    if (this.leadNewForm.invalid) {
      alert('You must fill the required fields!');
      return;
    }
    console.log(lead);
    this.store.dispatch(addLead({lead}))
    this.router.navigate(['../lead-detail', lead.id], {relativeTo: this.route});
    this.leadNewForm.reset();
    this.submitted = false;
  }

}
