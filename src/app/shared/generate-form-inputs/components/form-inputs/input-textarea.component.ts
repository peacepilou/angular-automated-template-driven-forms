import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TrackFormSubmitService } from '../../services/track-form-submit.service';
import { TextAreaField } from '../../models/textarea-field.type';
import { InputErrorsComponent } from '../errors/input-errors.component';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, CommonModule, InputErrorsComponent],
  template: `

  <div class="flex flex-column gap-1 field col-12">
      <label [for]="field.id">{{ field.label }}</label>
      <textarea
          pInputTextarea
          [rows]="5"
          [cols]="30"
          [id]="field.id"
          [name]="field.name"
          [(ngModel)]="field.value"
          [placeholder]="field.placeholder"
          [required]="field.required"
          [minlength]="field.minlength"
          [disabled]="field.disabled"
          #ref="ngModel"
          [ngClass]="{'ng-invalid ng-dirty': ref.invalid && ref.dirty}"
      ></textarea>

      @if (ref.errors && ref.dirty && ref.invalid && formSubmitted()) {

        <app-input-errors 
          [field]="field"
          [ref]="ref"
        ></app-input-errors>

      }

  </div>
  `,
  styles: ``
})
export class InputTextareaComponent {

  formSubmitted = inject(TrackFormSubmitService).state;
  field!: TextAreaField;
}
