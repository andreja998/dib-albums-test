import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Photo } from "../models";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get(this.baseUrl + "photos", {}).pipe(
      map((res: any) => {
        console.log(res);
        const photos: Photo[] = [];
        res.forEach(element => {
          photos.push(
            new Photo(element["id"], element["url"], element["title"])
          );
        });

        return photos;
      })
    );
  }

  getThumbnails(albumId: number): Observable<Photo[]> {
    return this.http.get(this.baseUrl + "photos", {}).pipe(
      map((res: any) => {
        console.log(res);
        const photos: Photo[] = [];
        res.forEach(element => {
          if (element["albumId"] === albumId) {
            photos.push(
              new Photo(
                element["id"],
                element["thumbnailUrl"],
                element["title"]
              )
            );
          }
        });

        return photos;
      })
    );
  }
}
