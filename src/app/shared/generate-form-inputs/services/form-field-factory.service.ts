import { Injectable, ViewContainerRef } from '@angular/core';
import { TextField } from '../models/text-field.type';
import { InputTextComponent } from '../components/form-inputs/input-text.component';
import { InputTextareaComponent } from '../components/form-inputs/input-textarea.component';
import { ComponentTypes } from '../utils/component-types.enum';

@Injectable({
  providedIn: 'root'
})
export class FormFieldFactoryService {


  createFieldComponent(componentType: string, containerRef: ViewContainerRef, fieldData: TextField): void {

    let componentToCreate;

    switch (componentType) {
      case ComponentTypes.TEXT:
        componentToCreate = InputTextComponent;
        break;
      case ComponentTypes.TEXTAREA:
        componentToCreate = InputTextareaComponent;
        break;
      default:
        componentToCreate = InputTextComponent;

    }

    const component = containerRef.createComponent(componentToCreate);
    component.instance.field = fieldData;
  }
}
