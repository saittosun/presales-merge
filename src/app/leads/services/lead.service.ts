import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lead } from '~types/lead';

@Injectable()
export class LeadService {
  fetchLeads(): Observable<Lead[]> {
    return of([
      {
        id: "2718d62c-f21d-493c-8717-cfe979927xxx",
        name: "Mijn Tijden",
        reference: "A001144",
        status: "pitch",
        resolution: "won",
        pitchDate: "2018-12-16T14:00:000Z",
        offerDate: "2019-01-07T08:00:000Z",
        offerPresentationDate: "2019-01-10T10:00:000Z",
        customer: "34bd4e53-029d-4743-831a-35efc0e003f4",
        resolutionComment: "Wow!! dat is geweldig!",
        notes: "Notes field for further notes between people working on it"
      },
      {
        id: "2718d62c-f21d-493c-8717-cfe979927cbb",
        name: "Zijn Tijden",
        reference: "A001144",
        status: "lead",
        resolution: 'ongoing',
        pitchDate: "2018-12-16T14:00:000Z",
        offerDate: "2019-01-07T08:00:000Z",
        offerPresentationDate: "2019-01-10T10:00:000Z",
        customer: "Digipolis Antwerpen",
        resolutionComment: "'t is aan de gang'",
        notes: "Notes field for further notes between people working on it"
      },
      {
        id: "2718d62c-f21d-493c-8717-cfe979927yyy",
        name: "Jouw Tijden",
        reference: "A001144",
        status: "offer",
        resolution: "lost",
        pitchDate: "2018-12-16T14:00:000Z",
        offerDate: "2019-01-07T08:00:000Z",
        offerPresentationDate: "2019-01-10T10:00:000Z",
        customer: "14bd4e53-029d-4743-831a-35efc0e003f4",
        resolutionComment: "De andere partijen waren X Y en Z en zij steldden een product voor dat veel goedkoper zou zijn en beter aansloot bij hun wensen",
        notes: "Notes field for further notes between people working on it"
      },
      {
        id: "2718d62c-f21d-493c-8717-cfe979927abc",
        name: "Haar Tijden",
        reference: "A001144",
        status: "BAFO",
        resolution: "lost",
        pitchDate: "2018-12-16T14:00:000Z",
        offerDate: "2019-01-07T08:00:000Z",
        offerPresentationDate: "2019-01-10T10:00:000Z",
        customer: "14bd4e53-029d-4743-831a-35efc0e003f4",
        resolutionComment: "De andere partijen waren X Y en Z en zij steldden een product voor dat veel goedkoper zou zijn en beter aansloot bij hun wensen",
        notes: "Notes field for further notes between people working on it"
      },
      {
        id: "2718d62c-f21d-493c-8717-cfe979927def",
        name: "Jullie Tijden",
        reference: "A001144",
        status: "complete",
        resolution: "won",
        pitchDate: "2018-12-16T14:00:000Z",
        offerDate: "2019-01-07T08:00:000Z",
        offerPresentationDate: "2019-01-10T10:00:000Z",
        customer: "14bd4e53-029d-4743-831a-35efc0e003f4",
        resolutionComment: "Wow!! dat is geweldig!",
        notes: "Notes field for further notes between people working on it"
      },
      {
        id: "2718d62c-f21d-493c-8717-cfe979927ghi",
        name: "Andere Tijden",
        reference: "A001144",
        status: "offer",
        resolution: "rejected",
        pitchDate: "2018-12-16T14:00:000Z",
        offerDate: "2019-01-07T08:00:000Z",
        offerPresentationDate: "2019-01-10T10:00:000Z",
        customer: "14bd4e53-029d-4743-831a-35efc0e003f4",
        resolutionComment: "Niet echt ons ding, we hebben geen capaciteit \nvoor deze opdracht en trekken ons terug",
        notes: "Notes field for further notes between people working on it"
      },
    ])
  }

  addLead(lead: Lead): Observable<Lead>{
    return of({...lead})
  }

  getLead(id: string): Observable<Lead> {
    return this.fetchLeads().pipe(map(customers => customers.find(customer => customer.id === id )))
  }

}
