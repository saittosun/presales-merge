import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownDirective } from './dropdown.directive';
import { InputRefDirective } from './input-ref.directive';
import { WithValidationInputComponent } from './with-validation-input/with-validation-input.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DropdownDirective,
    InputRefDirective,
    WithValidationInputComponent,
    TimelineComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownDirective,
    InputRefDirective,
    WithValidationInputComponent,
    TimelineComponent
  ],
})
export class SharedModule { }
