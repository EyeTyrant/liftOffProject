// SERVICE TO HOLD API CALLS TO USER TABLE IN DATABASE

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { Observable } from "rxjs";

// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json" }),
// };

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  private userUrl = "http://localhost:8080/reg";

  getUser() {
    return this.http.get<User[]>(this.userUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.userUrl,
      user
      //  { responseType: "text" as "json",} // NOT NEEDED WHEN POSTMAPPING RETURNS "" (EMPTY STRING)
    );
  }
}
