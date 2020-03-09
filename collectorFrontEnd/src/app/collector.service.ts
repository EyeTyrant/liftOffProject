import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DieCast } from "./collection";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CollectorService {
  private collectorListUrl = "http://localhost:8080/list";

  constructor(private http: HttpClient) {}

  getCollection(): Observable<DieCast[]> {
    return this.http.get<DieCast[]>(this.collectorListUrl);
  }

  getItem(id: string): Observable<DieCast> {
    return this.http.get<DieCast>(this.collectorListUrl + `/${id}`);
  }

  addItem(dieCast: DieCast): Observable<DieCast> {
    console.log(dieCast);
    return this.http.post<DieCast>(this.collectorListUrl, dieCast);
  }
  deleteItem(id: number) {
    const url = `${this.collectorListUrl}/${id}`;
    return this.http.delete<DieCast>(url);
  }
}
