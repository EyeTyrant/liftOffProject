// Service to hold functions to be used by any component

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DieCast } from "./collection";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CollectorService {
  private collectorListUrl = "http://localhost:8080/list";
  // inputForm: FormGroup;
  private url = `${this.collectorListUrl}`;

  constructor(private http: HttpClient, private frmBldr: FormBuilder) {}

  inputForm = this.frmBldr.group({
    year: [""],
    name: [""],
    brand: [""],
    mfr: [""],
  });
  private _refreshOnSubmit = new Subject<void>();

  get refrestOnSubmit() {
    return this._refreshOnSubmit;
  }

  getAllFromServer(): Observable<DieCast[]> {
    return this.http.get<DieCast[]>(this.url);
  }

  getItem(id: string): Observable<DieCast> {
    return this.http.get<DieCast>(`${this.url}/${id}`);
  }

  addItem(dieCast: DieCast): Observable<DieCast> {
    // console.log(dieCast);
    return this.http.post<DieCast>(this.url, dieCast).pipe(
      tap(() => {
        this._refreshOnSubmit.next();
      })
    );
  }

  updateItem(id: string, dieCast: DieCast): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, dieCast).pipe(
      tap(() => {
        this._refreshOnSubmit.next();
      })
    );
  }

  deleteItem(id: number) {
    return this.http.delete<DieCast>(`${this.url}/${id}`);
  }
}
