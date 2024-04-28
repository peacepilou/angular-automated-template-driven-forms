import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, Signal } from '@angular/core';
import { TextField } from '../models/text-field.type';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { TextAreaField } from '../models/textarea-field.type';
@Injectable({
  providedIn: 'root'
})
export class getFieldsService {

  constructor(private http: HttpClient) { }

  getFields(): Signal<Array<TextField | TextAreaField>> {
    return toSignal(this.http.get('assets/fields.json')
      .pipe(
        map((json: any) => json.fields)
      ));
  }
}
