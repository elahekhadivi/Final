import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { RecordData } from '../models/record.interface';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private _record: BehaviorSubject<RecordData[] | any> = new BehaviorSubject(null);
  record$: Observable<RecordData[]> = this._record.asObservable();

  constructor() { }
}
