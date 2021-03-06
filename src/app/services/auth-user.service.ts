import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { User } from "../models";

@Injectable({
  providedIn: "root"
})
export class AuthUserService {
  user: User;
  constructor(private http: HttpClient) {}

  login(Username: string, Password: string): Observable<any> {
    return this.http
      .post("https://jsonplaceholder.typicode.com/albums", {
        username: Username,
        password: Password
      })
      .pipe(
        map(res => {
          localStorage.setItem("token", "here goes our token");
        })
      );
  }

  logout() {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
