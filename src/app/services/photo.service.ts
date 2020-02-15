import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  getPhotos(albumId: number): Observable<SearchItem[]> {
    return this.http.get(this.baseUrl + "photos", {}).pipe(
      map((res: any) => {
        console.log(res);
        res.forEach(element => {
          marks.push(
            new SearchItem(element["MAKER_NAME"], element["MAKER_ID"])
          );
        });

        return marks;
      })
    );
  }
}
