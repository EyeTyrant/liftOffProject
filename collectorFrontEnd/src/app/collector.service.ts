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

  add(dieCast: any) {
    console.log(dieCast);
    return this.http.post(this.collectorListUrl, dieCast);
  }
}
