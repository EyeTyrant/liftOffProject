import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DieCastCollection } from "./collection";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CollectorService {
  private collectorListUrl = "http://localhost:8080/list";

  constructor(private http: HttpClient) {}

  getCollection(): Observable<DieCastCollection[]> {
    return this.http.get<DieCastCollection[]>(this.collectorListUrl);
  }
}
