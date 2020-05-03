// Service to hold functions to be used by any component

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DieCast } from "./collection";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { FormBuilder } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CollectorService {
  private collectorListUrl = "http://localhost:8080/list";
  private url = `${this.collectorListUrl}`;

  constructor(private http: HttpClient) {}

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
