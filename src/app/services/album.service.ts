import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable, throwError } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { Album } from "../models";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {}

  getAlbums(userId: number): Observable<Album[]> {
    return this.http.get(this.baseUrl + "albums", {}).pipe(
      switchMap((res: any) => {
        console.log(res);
        const albums: Album[] = [];
        res.forEach(element => {
          albums.push(new Album(element["id"], null));
        });

        return this.http.get(this.baseUrl + "photos", {}).pipe(
          map((photos: any) => {
            console.log(photos);
            photos.forEach(photo => {
              for (let i = 0; i < albums.length; i++) {
                if (
                  photo["albumId"] === albums[i].id &&
                  !(
                    typeof albums[i].thumbnailUrl != undefined &&
                    albums[i].thumbnailUrl
                  )
                ) {
                  console.log("EQUAAL");
                  albums[i].thumbnailUrl = photo["url"];
                  break;
                }
              }
            });
            console.log(albums);
            return albums;
          })
        );
      })
    );
    // return this.http.get(this.baseUrl + 'albums', {}).pipe(
    //   map((res: any) => {
    //     console.log(res);
    //     const albums: Album[] = [];
    //     res.forEach(element => {
    //       albums.push(new Album(element['id'], eleme))
    //     });

    //     return marks;
    //   })
    // );
  }
}
