import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject } from "rxjs";

export interface ModuleData {
  namespace: string;
  name: string;
  ready: string;
  status: string;
  restarts: string;
  age: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeneralModuleService {
  private api = 'http://localhost:3000/'
  sampleData = [
    {
      namespace: '01',
      name: 'test1',
      ready: '1/1',
      status: 'active',
      restarts: '0',
      age: '2d'
    },
    {
      namespace: '01',
      name: 'test1',
      ready: '1/1',
      status: 'active',
      restarts: '0',
      age: '2d'
    },
    {
      namespace: '01',
      name: 'test1',
      ready: '1/1',
      status: 'active',
      restarts: '0',
      age: '2d'
    },
  ];

  private moduleData$ = new Subject<ModuleData[]>();

  constructor(private http: HttpClient) {

  }

  getModuleDataListener(): Observable<ModuleData[]> {
    return this.moduleData$.asObservable();
  }

  getModuleData() {
    this.http.get<ModuleData[]>(this.api).pipe(
      catchError(err => {
        console.error('API Error:', err);
        throw err;
      })
    )
      .subscribe(modulesData => {
        this.moduleData$.next(modulesData);
      });
    }
}
