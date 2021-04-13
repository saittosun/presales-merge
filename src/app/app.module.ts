import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SearchComponent } from '../app/search/search.component';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { CustomersModule } from './customers/customers.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { LeadsModule } from './leads/leads.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SearchComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    ReactiveFormsModule,
    SharedModule,
    CustomersModule,
    LeadsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
    }),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
