import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  standalone: true,
  imports: [CommonModule],
  template: `

    <div
        class="error-message"
        *ngFor="let error of ref.errors | keyvalue"
    >
        <span *ngIf="error.key === 'required'">Le champs est requis</span>
        <span *ngIf="error.key === 'minlength'">Le champs doit être de {{ field.minlength }} caractères</span>
        <span *ngIf="error.key === 'maxlength'">Le champs ne peut pas posséder plus de {{ field.maxlength }} caractères</span>
        <span *ngIf="error.key === 'pattern'">Le champs est invalide.</span>
    </div>

  `,
  styles: ``
})
export class InputErrorsComponent {

  @Input()
  field!: any;

  @Input()
  ref!: NgModel;

}
