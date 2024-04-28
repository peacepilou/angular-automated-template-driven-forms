import { ChangeDetectorRef, Component, ViewChild, ViewContainerRef, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormFieldFactoryService } from '../services/form-field-factory.service';
import { TrackFormSubmitService } from '../services/track-form-submit.service';
import { getFieldsService } from '../services/get-fields.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [FormsModule, ButtonModule],
  template: `
    <form
      #form="ngForm"
      class="flex flex-column"
      (ngSubmit)="onSubmit()">

      <div class="formgrid grid">
        <div #fieldsContainer></div>
      </div>
      
      <p-button label="Submit" type="submit" class="m-auto mt-6"></p-button>

    </form>
  `,
  styles: ``
})
export class ContainerComponent {

  @ViewChild('fieldsContainer', { read: ViewContainerRef }) fieldsContainer!: ViewContainerRef;

  _factoryService = inject(FormFieldFactoryService);
  _cdr = inject(ChangeDetectorRef);
  _submitService = inject(TrackFormSubmitService);
  fields = inject(getFieldsService).getFields();

  constructor() {
    effect(() => {
      return this.generateFields(this.fields() || []);
    });
  }

  generateFields(fieldsData: any[]) {
    fieldsData.forEach(fieldData => {
      this._factoryService.createFieldComponent(fieldData.fieldType, this.fieldsContainer, fieldData);
    });
  }

  onSubmit() {
    this._submitService.setState();
  }
}
