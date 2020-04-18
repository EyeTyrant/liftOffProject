// Service to hold functions to be used by any component

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DieCast } from "./collection";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { TestBed } from "@angular/core/testing";
import { MatDisplayComponent } from "./mat-display/mat-display.component";

@Injectable({
  providedIn: "root",
})
export class CollectorService {
  private collectorListUrl = "http://localhost:8080/list";
  private url = `${this.collectorListUrl}`;

  constructor(private http: HttpClient, private frmBldr: FormBuilder) {}

  private _refreshOnSubmit = new Subject<void>();

  get refrestOnSubmit() {
    return this._refreshOnSubmit;
  }

  getAllFromServer(): Observable<DieCast[]> {
    return this.http.get<DieCast[]>(this.url);
  }

  getItem(id: number): Observable<DieCast> {
    return this.http.get<DieCast>(`${this.url}/${id}`);
  }

  addItem(dieCast: DieCast): Observable<DieCast> {
    return this.http.post<DieCast>(this.url, dieCast).pipe(
      tap(() => {
        this._refreshOnSubmit.next();
      })
    );
  }

  updateItem(id: number, dieCast: DieCast): Observable<void> {
    console.log(typeof id);
    return this.http.patch<void>(`${this.url}/${id}`, dieCast).pipe(
      tap(() => {
        this._refreshOnSubmit.next();
      })
    );
  }

  deleteItem(id: number) {
    return this.http.delete<DieCast>(`${this.url}/${id}`);
  }
}
