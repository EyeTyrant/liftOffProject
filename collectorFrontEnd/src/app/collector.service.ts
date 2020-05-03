import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DieCast } from "./collection";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CollectorService {
  private collectorListUrl = "http://localhost:8080/list";

  constructor(private http: HttpClient) {}

  private _refreshOnSubmit = new Subject<void>();

  get refrestOnSubmit() {
    return this._refreshOnSubmit;
  }

  getAllFromServer(): Observable<DieCast[]> {
    return this.http.get<DieCast[]>(this.collectorListUrl);
  }

  getItem(id: string): Observable<DieCast> {
    return this.http.get<DieCast>(this.collectorListUrl + `/${id}`);
  }

  addItem(dieCast: DieCast): Observable<DieCast> {
    // console.log(dieCast);
    return this.http.post<DieCast>(this.collectorListUrl, dieCast).pipe(
      tap(() => {
        this._refreshOnSubmit.next();
      })
    );
  }

  deleteItem(id: number) {
    const url = `${this.collectorListUrl}/${id}`;
    return this.http.delete<DieCast>(url);
  }
}
