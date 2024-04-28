import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextField } from '../../models/text-field.type';
import { TrackFormSubmitService } from '../../services/track-form-submit.service';
import { InputErrorsComponent } from '../errors/input-errors.component';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule, KeyValuePipe, InputErrorsComponent],
  template: `

  <div class="flex flex-column gap-1 field col-12">
    <label [for]="field.id">{{ field.label }}</label>
    <input
        pInputText
        [id]="field.id"
        [name]="field.name"
        [type]="field.type"
        [(ngModel)]="field.value"
        [autocomplete]="field.autocomplete"
        [placeholder]="field.placeholder"
        [required]="field.required"
        [minlength]="field.minlength"
        [maxlength]="field.maxlength"
        [pattern]="field.pattern"
        [disabled]="field.disabled"
        #ref="ngModel"
        [ngClass]="{'ng-invalid ng-dirty': ref.invalid && ref.dirty}"
    />

    @if (ref.errors && ref.dirty && ref.invalid && formSubmitted()) {

      <app-input-errors 
        [field]="field"
        [ref]="ref"
      ></app-input-errors>
      
    }

</div>`,
  styles: ``
})
export class InputTextComponent {

  formSubmitted = inject(TrackFormSubmitService).state;
  field!: TextField;
}

