import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LeadFacade } from 'src/app/leads/services/lead.facade';
import { CustomerFacade } from '~customers/services/customer.facade';
import { Customer } from '~types/customer';

@Component({
  selector: 'app-projects-of-customer',
  templateUrl: './projects-of-customer.component.html',
  styleUrls: ['./projects-of-customer.component.scss']
})
export class ProjectsOfCustomerComponent implements OnInit {

  displayedColumns: string[] = ['projectName', 'status', 'date', 'detail'];
  dataSource;
  id: number;
  customer: Customer;
  customers : Customer[];
  filteredCustomers: Customer[] = [];

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private store: CustomerFacade,
              private route: ActivatedRoute,
              private router: Router,
              private leadFacade: LeadFacade) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params.id;
    // })
    // this.store.getCustomers().subscribe(customers => {
    //   this.customers = customers
    // })
    // this.customer = this.customers.find(customer => customer.id === this.id)
    // for( const customer of this.customers) {
    //   if (customer.customername === this.customer.customername) {
    //     this.filteredCustomers.push(customer)
    //   }
    //   this.dataSource = new MatTableDataSource(this.filteredCustomers)
    // }
  }

  onHandleProject() {
    const customerName = this.customer.customername;
    this.leadFacade.getLeads().subscribe(projects => {
      projects.forEach(project => {
        if(project.customer === customerName) {
          this.router.navigate(['leads/lead-detail', project.id])
        }
      })
    })
  }

}
