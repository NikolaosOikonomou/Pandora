import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GeneralModuleService {

  sampleData = [
    { namespace: '01', name: 'test1', status: 'active' },
    { namespace: '01', name: 'test1', status: 'active' },
    { namespace: '01', name: 'test1', status: 'active' },
    { namespace: '01', name: 'test1', status: 'active' },
  ];

  private moduleData$: Subject<{}[]> = new Subject<{}[]>();

  getModuleDataListener(): Observable<{}[]> {
    return this.moduleData$.asObservable();
  }

  getModuleData() {
    this.moduleData$.next([...this.sampleData]);
  }
}
