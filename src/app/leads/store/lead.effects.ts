import { Router } from '@angular/router';
import { LeadService } from './../services/lead.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromLeadActions from './lead.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class LeadEffects {

  loadLeads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromLeadActions.loadLeads),
      mergeMap(action =>
        this.leadService.fetchLeads().pipe(
          map(leads => fromLeadActions.loadLeadsSuccess({leads})),
          catchError(error =>
            of(fromLeadActions.loadLeadsFailure({error}))
          )
        )
      )
    )
  );

  loadLead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromLeadActions.loadLead),
      mergeMap(action =>
        this.leadService.getLead(action.id).pipe(
          map(lead => fromLeadActions.loadLeadSuccess({selectedLead: lead})),
          catchError(error =>
            of(fromLeadActions.loadLeadFailure({error}))
          )
        )
      )
    )
  );

  createLead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromLeadActions.addLead),
      mergeMap(action =>
        this.leadService.addLead(action.lead).pipe(
          map(lead => fromLeadActions.addLeadSuccess({lead})),
          catchError(error =>
            of(fromLeadActions.addLeadFailure({error}))
          )
        )
      ),
      tap(() => this.router.navigate(['../lead-detail']))
    )
  );



  constructor(private actions$: Actions,
              private leadService: LeadService,
              private router: Router) {}

}
